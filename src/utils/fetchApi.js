const accessKey = "ujQTpKNLYITs06OsAAYjwZTbi3CpWaurTm4l6P57WjA";
const searchEndPoint = "https://api.unsplash.com/search/photos";
const statsEndPoint = "https://api.unsplash.com/photos";

export const fetchApi = async (query) => {
  try {
    const searchResponse = await fetch(
      `${searchEndPoint}?query=${query}&per_page=10&client_id=${accessKey}`
    );

    const searchJsonResponse = await searchResponse.json();

    const imageList = searchJsonResponse.results;

    if (imageList.length < 1) {
      return imageList;
    } else {
      const statsPromises = imageList.map(async (image) => {
        const statsResponse = await fetch(
          `${statsEndPoint}/${image.id}/statistics`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          }
        );
        const statsJsonResponse = await statsResponse.json();
        return {
          ...image,
          stats: {
            views: statsJsonResponse.views.total,
          },
        };
      });

      const imageListWithStats = await Promise.all(statsPromises);
      console.log(imageListWithStats);

      return imageListWithStats;
    }
  } catch (error) {
    console.log("Error getting images or stats", error);
  }
};
