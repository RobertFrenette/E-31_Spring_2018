import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mountains = [
      { 
        id: 1,
        name: 'Mt. Washington',
        elevation: 6288,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Washington-StoryImage_2-5.jpg",
        desc: "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
        lat: 44.270403,
        lng: -71.303501
      },
      { 
        id: 2,
        name: 'Mt. Adams',
        elevation: 5799,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Adams-StoryImage_2-5.jpg",
        desc: "Mt. Adams (5,799') is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.",
        lat: 44.320686,
        lng: 71.291742
      },
      { 
        id: 3,
        name: "Mt. Jefferson",
        elevation: 5716,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Jefferson-StoryImage_2-5.jpg",
        desc: "Mt. Jefferson (5,716 feet) has three summits a short distance apart, in line northwest and southeast, with the highest in the middle. Perhaps the most striking view is down the Great Gulf with the Carter Range beyond.",
        lat: 44.304196,
        lng: -71.316848
      },
      { 
        id: 4,
        name: "Mt. Monroe",
        elevation: 5372,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Monroe-StoryImage_2-5.jpg",
        desc: "Mt. Monroe (5,372 feet) is the highest of the Southern Presidentials, and is a sharply pointed peak rising abruptly from the area around the Lakes of the Clouds. The summit is completely above treeline and affords fine views of the deep chasm of Oakes Gulf.",
        lat: 44.255036,
        lng: -71.321483
      },
      { 
        id: 5,
        name: "Mt. Madison",
        elevation: 5366,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Madison-StoryImage_2-5.jpg",
        desc: "Mt. Madison (5,366 feet) is the farthest northeast of the high peaks of the Presidential Range, remarkable for the great drop of more than 4,000 feet to the river valleys east and northeast from the summit.",
        lat: 44.328422,
        lng: -71.277795
      },
      { 
        id: 6,
        name: "Mt. Lafayette",
        elevation: 5260,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Lafayette-StoryImage_2-5.jpg",
        desc: "Mt. Lafayette (5,260 feet) represents the highest peak in the Franconia Ridge and, from the summit, offers a stunning view of the Pemigewasset Wilderness Area.",
        lat: 44.16078,
        lng: -71.644464
      },
      { 
        id: 7,
        name: "Mt. Lincoln",
        elevation: 5089,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Lincoln-StoryImage_2-5.jpg",
        desc: "Mt. Lincoln (5,089 feet), a part of the popular and scenic Franconia Ridge, bears a sharp, rugged peak with excellent views of the surrounding area and an array of alpine plants.",
        lat: 44.148587,
        lng: -71.644678
      },
      { 
        id: 8,
        name: "South Twin",
        elevation: 4902,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/STwin-StoryImage_2-5.jpg",
        desc: "South Twin Mountain (4,902 feet) offers sweeping views to the south of the Franconia Ridge and Franconia Brook valleys.",
        lat: 44.18762,
        lng: -71.554685
      },
      { 
        id: 9,
        name: "Carter Dome",
        elevation: 4832,
        effort: "Strenuous",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/CDome-StoryImage-5.jpg",
        desc: "Carter Dome (4,832'), in the Carter-Moriah Range, offers dramatic, close-up views of Mount Washington and the Presidential Range from its northeastern shoulder, Mount Hight.",
        lat: 44.267268,
        lng: -71.179004
      },
      { 
        id: 10,
        name: "Mt. Moosilauke",
        elevation: 4802,
        effort: "Moderate",
        img: "http://www.outdoors.org/wp-content/uploads/2017/10/Moosilauke-StoryImage_2-5.jpg",
        desc: "Mount Moosilauke, at 4,802 feet, is the western-most 4,000-footer in NH. The alpine summit, on a clear day, affords hikers stunning views, to the east, of the Franconia Ridge and Presidentials, and to the west, the Green Mountains of Vermont and, in the distance, the Adirondacks in New York State.",
        lat: 44.024422,
        lng: -71.830974
      }
    ];
    return {mountains};
  }
}