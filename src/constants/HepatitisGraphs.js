import { CardType, PeriodType } from "./CardType";
export const HepatitisGraphs = [
  {
    content: [
      {
        title:
          "Percentage of Hep B positive among the total number of screened",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "AqneDJ3Yppr;",
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

        api: "/analytics.json?dimension=dx%3AAqneDJ3Yppr&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
        col: 4,
      },
      {
        title: "Number of Chronic HBV infected",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "le0k8jKDs2b;",
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

        api: "/analytics.json?dimension=dx%3Ale0k8jKDs2b&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
        col: 2,
      },
      {
        title: "Number of Chronic HBV infected on treatment",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "M6ktmssu0sx;",
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

        api: "/analytics.json?dimension=dx%3AM6ktmssu0sx&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
        col: 2,
      },
      {
        title: "Percentage of HCV Infected among the total number screened",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "T3eotuleoW3;",
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

        api: "/analytics.json?dimension=dx%3AT3eotuleoW3&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=pe%3A202307%2Cou%3AUSER_ORGUNIT",
        col: 2,
      },
      {
        title: "Percentage of HCV infected on treatment",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "N34826Ani7k;",
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

        api: "/analytics.json?dimension=dx%3AN34826Ani7k&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2023",
        col: 2,
      },

      {
        title: "General population tested for Hep B",
        type: CardType.BAR,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "UMXeQ9VuW6G;PUx40RSnllX;bZMdJ0xcBHN;",
              type: CardType.BAR,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 2,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        // dataElement: [
        //   {
        //     id: "UMXeQ9VuW6G;PUx40RSnllX;bZMdJ0xcBHN;",
        //     type: CardType.BAR,
        //   },
        // ],
        // period: {
        //   method: PeriodType.DIMENSION,
        //   type: PeriodType.YEAR,
        //   count: 2,
        // },
        api: "/analytics.json?dimension=dx%3AUMXeQ9VuW6G%3BPUx40RSnllX%3BbZMdJ0xcBHN&dimension=pe%3A202307%3B202306&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },

      {
        title:
          "Number of General population and Key population diagnosed with Hep B",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "rNvNxXCzKyi;G8xJZebbhL9;",
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

        api: "/analytics.json?dimension=dx%3ArNvNxXCzKyi%3BG8xJZebbhL9&dimension=pe%3A202307&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "Number of Blood Donors positive for Hep B / Hep C",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "FP4sXnCUWC4;",
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

        api: "/analytics.json?dimension=dx%3AFP4sXnCUWC4&dimension=pe%3A202306%3B202307%3B202308%3B202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "General population and Key population Screened for HCV",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "aBijIG2E6Eu;IFq2lvZxkug;z7JrJtoMaeK;",
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

        api: "/analytics.json?dimension=dx%3AaBijIG2E6Eu%3BIFq2lvZxkug%3Bz7JrJtoMaeK&dimension=pe%3A202307&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "General population and Key population diagnosed with HCV",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "u44kWv9hj6W;yfjSqwOpu3O;Prt6GoUtnkn;",
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

        api: "/analytics.json?dimension=dx%3Au44kWv9hj6W%3ByfjSqwOpu3O%3BPrt6GoUtnkn&dimension=pe%3A202307&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
    ],
  },
];
