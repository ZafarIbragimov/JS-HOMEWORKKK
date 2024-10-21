const bodyy = (imageUrl) => {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
};

const fasl = () => {
  bodyy("https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c-1200-80.jpg");
};

const fasl1 = () => {
  bodyy(
    "https://media.cnn.com/api/v1/images/stellar/prod/210316134738-02-wisdom-project-summer.jpg?q=x_4,y_0,h_2003,w_3560,c_crop/h_833,w_1480"
  );
};

const fasl2 = () => {
  bodyy("https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg");
};

const fasl3 = () => {
  bodyy(
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-winter-mountains-with-inversion-during-golden-hour-free-image.jpg?w=600&quality=80"
  );
};
