import photoCardTemplate from '../../template/photoCardTemplate.hbs';
import notification from '../notification';
import refs from '../refs';
const {errorNotif} = notification;
const {galleryRef} = refs;
export default {
     insertMarkup(arrImages) {
        // console.log(arrImages);
        if(arrImages.length === 0) {return errorNotif();}
        
        let markup = photoCardTemplate(arrImages);
        return refs.galleryRef.insertAdjacentHTML('afterbegin', markup);
    },
     clearMarkup(){
        galleryRef.innerHTML = '';
    }
}

