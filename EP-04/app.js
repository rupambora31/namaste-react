import React from 'react';
import ReactDOM from 'react-dom/client';

/*
 * Header
 *    -Logo
 *    -Nav items
 * Body
 *    -Search
 *    -RestaurantContainer
 *      -RestaurantCard
 *        -Img
 *        -Name, Rating, Cuisine, ETA, Price
 * Footer
 *    -Copyright
 *    -Links
 *    -Address
 *    -Contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-102.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="restaurant logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <div style={{ fontWeight: '600' }}>
        ⭐ {avgRating} • <span>{deliveryTime} mins</span>
      </div>
      <p>{costForTwo}</p>
      <p>{cuisines.join(', ')}</p>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '327716',
      name: 'Mast Biryani',
      cloudinaryImageId: '288abbc58babf7b063b256e729b045b9',
      locality: 'Assam Trunk Road',
      areaName: 'Jalukbari',
      costForTwo: '₹450 for two',
      cuisines: ['Biryani', 'North Indian', 'Mughlai', 'Tandoor'],
      avgRating: 4.4,
      parentId: '8229',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      promoted: true,
      adTrackingId:
        'cid=9645615~p=1~eid=0000018c-befe-b598-05d6-9b7000a50171~srvts=1704011412888~45995',
      sla: {
        deliveryTime: 42,
        lastMileTravel: 8.8,
        serviceability: 'SERVICEABLE',
        slaString: '42 mins',
        lastMileTravelString: '8.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-01 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=327716',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '422806',
      name: 'KFC',
      cloudinaryImageId: 'f01666ac73626461d7455d9c24005cd4',
      locality: 'Lokhra Road',
      areaName: 'Kahilipara',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.4,
      parentId: '547',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '6.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=422806',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '97860',
      name: "Niru's Dhaba",
      cloudinaryImageId: '8115c1a0348a1ed0414495668f97c1ad',
      locality: 'Lokhra Road',
      areaName: 'Beltola',
      costForTwo: '₹350 for two',
      cuisines: ['North Indian', 'Chinese'],
      avgRating: 4.4,
      parentId: '149290',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=97860',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '426314',
      name: 'Namma Chennai Dosa Express',
      cloudinaryImageId: 'wy4tnngati4ihnvie7c8',
      locality: 'Garchuk',
      areaName: 'Lokhra',
      costForTwo: '₹200 for two',
      cuisines: ['South Indian', 'Kerala', 'Fast Food', 'Beverages'],
      avgRating: 4.4,
      veg: true,
      parentId: '143646',
      avgRatingString: '4.4',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 19:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=426314',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '88239',
      name: 'Biryani Centre',
      cloudinaryImageId: '06dc053100a07d41935a797bb7766ed2',
      locality: 'Assam Trunk Road',
      areaName: 'Maligaon',
      costForTwo: '₹350 for two',
      cuisines: ['Biryani', 'North Indian', 'Chinese', 'Pan-Asian', 'Tandoor'],
      avgRating: 4,
      parentId: '8227',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      promoted: true,
      adTrackingId:
        'cid=10195272~p=3~eid=0000018c-befe-b598-05d6-9b7200a50324~srvts=1704011412888~45995',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.9,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '6.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=88239',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '385901',
      name: 'Kiranshree Sweets & Snacks',
      cloudinaryImageId: 'jerysaaaema2fkvqymyf',
      locality: 'Lokhra Road',
      areaName: 'Kala Pahar',
      costForTwo: '₹350 for two',
      cuisines: ['North Indian', 'Sweets'],
      avgRating: 4.5,
      veg: true,
      parentId: '7397',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '5.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=385901',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '745990',
      name: 'Cake.Com',
      cloudinaryImageId: 'a04cbf624f0c4f9c149d6ea9c8d32b12',
      locality: 'Arya Nagar',
      areaName: 'Ulubari',
      costForTwo: '₹200 for two',
      cuisines: ['Chinese', 'North Indian'],
      avgRating: 4.1,
      veg: true,
      parentId: '55189',
      avgRatingString: '4.1',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 8.6,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '8.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=745990',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '568563',
      name: 'Mast Punjabi Dhaba',
      cloudinaryImageId: 'nkj06c05iaqkfththgdn',
      locality: 'Assam Trunk Road',
      areaName: 'Maligaon',
      costForTwo: '₹400 for two',
      cuisines: [
        'Punjabi',
        'North Indian',
        'Mughlai',
        'Biryani',
        'Chinese',
        'Thalis',
        'Tandoor',
      ],
      avgRating: 4.3,
      parentId: '8305',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.9,
        serviceability: 'SERVICEABLE',
        slaString: '35 mins',
        lastMileTravelString: '6.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=568563',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '97278',
      name: 'Shankar Dhaba and Restaurant',
      cloudinaryImageId: 'c4puowuer9jqdjkz75ya',
      locality: 'AHOM Gaon',
      areaName: 'Beltola',
      costForTwo: '₹250 for two',
      cuisines: [
        'North Indian',
        'Chinese',
        'Thalis',
        'Snacks',
        'Tandoor',
        'Assamese',
      ],
      avgRating: 4.1,
      parentId: '181725',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      promoted: true,
      adTrackingId:
        'cid=10195523~p=4~eid=0000018c-befe-b598-05d6-9b7300a50470~srvts=1704011412888~45995',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-01 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=97278',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '728486',
      name: 'Sharma Sweets',
      cloudinaryImageId: '373c32404b17cfb01d9f2d08d36f0903',
      locality: 'Lalmati Durga',
      areaName: 'Lokhra',
      costForTwo: '₹250 for two',
      cuisines: ['Sweets', 'Snacks'],
      avgRating: 4.1,
      veg: true,
      parentId: '2008',
      avgRatingString: '4.1',
      totalRatingsString: '50+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.2,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '4.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 21:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=728486',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '478071',
      name: 'The Biryani Mahal',
      cloudinaryImageId: 'cvuxiugmcbrnf4zdy8xy',
      locality: 'Assam Trunk Road',
      areaName: 'Maligaon',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani', 'North Indian', 'Fast Food'],
      avgRating: 3.6,
      parentId: '205454',
      avgRatingString: '3.6',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.3,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '7.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=478071',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '593798',
      name: 'Fat belly',
      cloudinaryImageId: '6614fa9bdbc5559dd5f05aecb2caf980',
      locality: 'Lal Ganesh',
      areaName: 'Lal Ganesh',
      costForTwo: '₹300 for two',
      cuisines: [
        'Chinese',
        'Pan-Asian',
        'Thai',
        'Tibetan',
        'Snacks',
        'Fast Food',
      ],
      avgRating: 4.5,
      parentId: '8251',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=593798',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '94653',
      name: 'Kolkata Biryani',
      cloudinaryImageId: '9102405e3176e068a91bd2ce943d06b5',
      locality: 'Bhar Thakur Mill Road',
      areaName: 'Ulubari',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani', 'North Indian', 'Mughlai', 'Desserts'],
      avgRating: 4.3,
      parentId: '6879',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      promoted: true,
      adTrackingId:
        'cid=10201382~p=5~eid=0000018c-befe-b598-05d6-9b7400a50500~srvts=1704011412888~45995',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 9.8,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '9.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=94653',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '117719',
      name: 'Dosa Corner',
      cloudinaryImageId: 'cr46aoqwfxanmclehxpq',
      locality: 'Goshala Bazaar',
      areaName: 'Maligaon',
      costForTwo: '₹400 for two',
      cuisines: ['South Indian', 'Chinese', 'North Indian', 'Fast Food'],
      avgRating: 4.1,
      parentId: '1541',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=117719',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '519820',
      name: 'Laziz Pizza',
      cloudinaryImageId: 'zvvf9beifbtbdwhqqfcn',
      locality: 'Lakhra Road',
      areaName: 'Kala Pahar',
      costForTwo: '₹300 for two',
      cuisines: ['Pizzas'],
      avgRating: 4.4,
      parentId: '2299',
      avgRatingString: '4.4',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.5,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '6.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 22:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=519820',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '468694',
      name: 'Winni Cakes & More',
      cloudinaryImageId: 'yf7zfsljswbailbauz2k',
      locality: 'AK Azad Road',
      areaName: 'Ulubari',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Snacks'],
      avgRating: 4.1,
      veg: true,
      parentId: '226144',
      avgRatingString: '4.1',
      totalRatingsString: '50+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.3,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '9.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-31 21:15:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹120 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=468694',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
