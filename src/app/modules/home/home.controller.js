class HomeController {
  constructor(contentful) {
    'ngInject';
    this.contentful = contentful;
    this.posts = {};
    this.featuredImage = null;
    this.postCreatedDate = null;
    this.numberOfPosts = 0;
    this.getEntries();
  }

  getEntries() {
    this.contentful
      .entries()
      .then(response => {
        console.log(response);
        this.posts = response.data.items[0];
        this.numberOfPosts = response.data.items.length;
        this.featuredImage = this.posts.fields.post_featured_image.fields.file.url;
        this.postCreatedDate = this.posts.sys.createdAt;

      }, (err) => console.log(err));
  }

}

HomeController.$inject = ['contentful'];

export default HomeController;
