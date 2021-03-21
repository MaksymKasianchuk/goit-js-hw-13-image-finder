import refs from '../refs';
import debounce from 'lodash.debounce';
import lodash from 'lodash';
import ImagePagination from '../api/pagination';
import notification from '../notification';

const {  emptyNotif, loadMoreNotif} = notification;
const { observerRef, inputRef } = refs;
const image = new ImagePagination();
let currentInputValue;

inputRef.addEventListener('input', debounce(requestImage, 1000));

const options = {
    rootMargin: '400px',
    threshold: 0.5,
  };

const observerHandler = lodash.debounce(entries => {
    const { isIntersecting } = entries[0];
    if (!isIntersecting) return;
    if(!inputRef.value) return;
    loadMoreNotif(); 
    image.loadMore();;
}, 300);

const observer = new IntersectionObserver(observerHandler, options);
observer.observe(observerRef);

function requestImage(){
    currentInputValue = inputRef.value;
    if(!inputRef.value) {
        emptyNotif();
        return image.pageReset();
    }
    if(inputRef.value !== image.searchKey){
        image.pageReset();
        currentInputValue = inputRef.value;
    }
    image.searchKey = currentInputValue;
    image.loadMore();
}


// const { loadMoreBtnRef, inputRef } = refs;
// loadMoreBtnRef.addEventListener('click', ()=> { loadMoreNotif(); image.loadMore();} );
