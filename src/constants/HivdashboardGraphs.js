import { CardType, PeriodType } from "./CardType";
export const HivdashboardGraphs = [
  {
    title: "KEY POPULATION",
    content: [
      {
        title:
          "% Female sex workers reached with HIV prevention programmes - defined package of services",
        type: CardType.DONUT,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "RYe9xBcGnxk;",
              type: CardType.DONUT,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3ARYe9xBcGnxk&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
      {
        title:
          "% TG reached with HIV prevention programmes - defined package of services",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "Ko757RI9Nk0;",
              type: CardType.DONUT,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        col: 4,

        api: "/analytics.json?dimension=dx%3AKo757RI9Nk0&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
      {
        title:
          "% MSM reached with HIV prevention programmes - defined package of services",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "S4DLXy04Dvd;",
              type: CardType.DONUT,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        col: 4,

        api: "/analytics.json?dimension=dx%3AS4DLXy04Dvd&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
    ],
  },

  {
    col: 4,
    content: [
      {
        title: "Estimated Number of Key Population",
        type: CardType.PIE,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "nMxQKsL6vnQ;",
              type: CardType.PIE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AnMxQKsL6vnQ%3BCukGVtuTaG0%3BbMTfjr9PtLy&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202308",
      },
      {
        title: "Percentage of key population initiated oral PrEP",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "SOKhpQeBLZV;dcUapvRdt4s;c5qcUnnlGlE;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 4,
        api: "/analytics.json?dimension=dx%3ASOKhpQeBLZV%3BdcUapvRdt4s%3Bc5qcUnnlGlE&dimension=pe%3A202307&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "key population usage of condoms",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "Cy7Q8ZSJ4A8;NThc9HDj6TW;iehhWW31xjB;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        col: 4,

        api: "/analytics.json?dimension=dx%3ACy7Q8ZSJ4A8%3BNThc9HDj6TW%3BiehhWW31xjB&dimension=pe%3A202307&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
    ],
  },
  {
    content: [
      {
        title: "Key Population who received HIV test and know their results",
        type: CardType.COLUMN,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "hWkwoAcae6I;LUnZZ6mMdwl;aCSRtJBVFjO;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AhWkwoAcae6I%3BLUnZZ6mMdwl%3BaCSRtJBVFjO&dimension=ou%3AUSER_ORGUNIT&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=pe%3A202307",
      },
      {
        title: "Key population tested and positive for syphilis",
        type: CardType.COLUMN,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "eFiqOPvIwQ6;XvlBtiYvJ39;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AeFiqOPvIwQ6%3BXvlBtiYvJ39&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title:
          "Total number of key population screened and positive for STI other than syphilis",
        type: CardType.COLUMN,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "IZjiiKz05r1;pfarI4fuAZL;yA7sQsjFDI5;cpwAKOiSUlD;luJOAYfV5Om;WvONqWH42cy;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AIZjiiKz05r1%3BpfarI4fuAZL%3ByA7sQsjFDI5%3BcpwAKOiSUlD%3BluJOAYfV5Om%3BWvONqWH42cy&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
    ],
  },
  {
    title: "GENERAL POPULATION",
    content: [
      {
        title: "ANC Pregnant mothers with known HIV status and syphilis status",
        type: CardType.COLUMN,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "qZS38Sthcej;pWQLxF3o8YN;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AqZS38Sthcej%3BpWQLxF3o8YN&dimension=ou%3AUSER_ORGUNIT&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=pe%3A202307",
      },
      {
        title: "Number of HIV positive newbornss",
        type: CardType.COLUMN,
        col: 4,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "PlPHGvAqRzG;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3APlPHGvAqRzG&dimension=pe%3A2023%3B2022%3B2021%3B2020%3B2019&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },

      {
        title: "Number of Blood Donors screened for HIV",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "vXjgUn6BItf;",
              type: CardType.TREE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 2,
        api: "/analytics.json?dimension=dx%3AvXjgUn6BItf&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
      {
        title: "Number of Blood Donors positive for HIV",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "UDf6qHqgFtm;",
              type: CardType.TREE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 2,
        api: "/analytics.json?dimension=dx%3AUDf6qHqgFtm&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2023",
      },
      {
        title: "Blood Donors screened for syphilis",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "lmPoFId2KIy;",
              type: CardType.TREE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 2,
        api: "/analytics.json?dimension=dx%3AlmPoFId2KIy&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
      {
        title: "Blood Donors positive for syphilis",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "uOJgBRylAlv;",
              type: CardType.TREE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 2,
        api: "/analytics.json?dimension=dx%3AuOJgBRylAlv&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
    ],
  },
  {
    content: [
      {
        title: "Women who received ART during pregnancy",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "MQS9lild3X4;",
              type: CardType.TREE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        col: 4,
        api: "/analytics.json?dimension=dx%3AMQS9lild3X4&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
      {
        title: "% HIV positive newborn from a HIV positive mother",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "ZvJOnQgKLkQ;",
              type: CardType.DONUT,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "filter=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        col: 4,

        api: "/analytics.json?dimension=dx%3AZvJOnQgKLkQ&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
      },
    ],
  },
];
