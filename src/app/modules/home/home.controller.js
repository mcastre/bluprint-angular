class HomeController {
  constructor(contentful) {
    'ngInject';
    this.contentful = contentful;
    this.posts = {};
    this.featuredImage = null;
    this.postCreatedDate = null;
    this.getEntries();
  }

  getEntries() {
    this.contentful
      .entries()
      .then(response => {
        this.posts = response.data.items[0];
        this.featuredImage = this.posts.fields.featuredImage.fields.file.url;
        this.postCreatedDate = this.posts.sys.createdAt;
        console.log(this.posts);
      }, (err) => console.log(err));
  }

}

HomeController.$inject = ['contentful'];

export default HomeController;
