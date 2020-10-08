const fetch = require("node-fetch");
const cheerio = require("cheerio");
const { response } = require("express");

module.exports.fetchPost = function (req, res) {
  let url = `https://medium.com/search?q=${req.params.tagName}`;

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      
      let posts = [];
      const $ = cheerio.load(data);
      

     
      $(".postArticle").each(function(i, element){
          let post = {};
          const $elem = $(element);
          post.content = $elem.find('h3').text();
          post.auther = $elem.find('.u-flexCenter .postMetaInline .ds-link').text();
          post.time = $elem.find('.u-flexCenter .postMetaInline .js-postMetaInlineSupplemental').text();
          post.link = $elem.find('.postArticle-content a').attr('href');
          post.description = $elem.find('p').text();
          // post.image = $elem.find('.progressiveMedia-canvas img').attr('src');
          posts.push(post);
          
      });

      let tags = [];

      $('.tags li').each((i,element)=>{
         const $elem = $(element);
          let tag = $elem.text();
         tags.push(tag); 
      })

      return res.json(200,{
        posts,
        tags
      });
    });


};

module.exports.fetchPostDetails = function(req,res){
  let url = req.params.link;
  console.log('function is called ',url);
  url = url.split(',').join('/');
  url = "https://" + url;
  console.log(url);

  fetch(url)
    .then(response=>response.text())
    .then(data =>{
      console.log(data);
      let postDetail = {};
      const $ = cheerio.load(data);
      let heading = [];
      $('#root').each(function(i,elem){
        const $elem = $(elem);
        // let postHeading = $elem.find('.n h1').text();

      })

      $('h1').each((i,elem)=>{
        let postHeading = $(elem).text();
        heading.push(postHeading);
      })
      
      postDetail.heading = heading[0];

       let response = [];
      $('.n p').each((i,p)=>{
           let para = $(p).text();
           response.push(para);
      })

      postDetail.response = response;
      
      let tags = [];
      $('ul li a').each((i,elem)=>{
         let tag = $(elem).text();
         tags.push(tag);
      })
      postDetail.tags = tags;

      $('.fz').each((i,elem)=>{
        let name = $(elem).find('a').text();
        postDetail.auther = name;
      })

      return res.json(200,{
        postDetail
      })
    })
}
