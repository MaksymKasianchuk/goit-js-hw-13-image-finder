import markupRender from "../insertingMarkup";
import imgApi from "./apiService";

const { insertMarkup, clearMarkup } = markupRender;

class ImagePagination{
  searchKey ='';
    constructor(){
        this.imagesArr = [];
        this.searchKey = '';
        this.currentPage = 1;
        this.loadMore = this.loadMore.bind(this);
    }
      get searchKey(){
        return this.searchKey;
      }
      set searchKey(searchKey) {
        if (!searchKey) {
          console.error('image not found!');
        }
        this.searchKey = searchKey;
      }

      loadMore() {
        this.fetchImages()
        .then((results) => {
          const {hits} = results;
          this.addImages(hits);
          clearMarkup();
          insertMarkup(this.imagesArr);
          this.currentPage += 1;
        });
        // console.log(this.currentPage);
      }
      addImages(newImages) {
        this.imagesArr = [...this.imagesArr, ...newImages];
      }
    fetchImages() {
        return imgApi.fetchImages(this.currentPage, this.searchKey); 
    }
    pageReset() {
        this.currentPage = 1;
        this.imagesArr = [];
        clearMarkup();
        // console.log("Has been reset");
    }
}

export default ImagePagination;

