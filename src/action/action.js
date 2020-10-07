export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_START = 'FETCH_POST_START';
export const ADD_POST_DETAIL = 'ADD_POST_DETAIL';
const RootUrl = 'http://localhost:8000';

export function fetchPost(searchElement){
    return (dispatch)=>{
        dispatch(fetchPostStart());
        let url = `${RootUrl}/search/${searchElement}`;
        fetch(url)
          .then(response => response.json())
          .then(data =>{
              console.log('data',data);
              dispatch(fetchpost(data,searchElement));
          })
    }
}

export function fetchPostDetails(url){
     
    console.log('show details called');
    url = url.split('https://')[1];
    url = url.split('/');
    console.log('url',url);
    return (dispatch)=>{
        dispatch(fetchPostStart());
        let link = `${RootUrl}/postDetail/${url}`
        fetch(link)
        .then(response=>response.json())
        .then(data=>{
            console.log("post detail data",data);
            dispatch(addPostDetail(data.postDetail));
        })
    }
    
}

export function fetchpost(data,searchedTag){
    return {
        type:FETCH_POST,
        data,
        searchedTag
    }
}
export function fetchPostStart(){
    return {
        type:FETCH_POST_START
    }
}
export function addPostDetail(data){
    return {
       type:ADD_POST_DETAIL,
       data
    }
}