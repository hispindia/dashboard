import { CardType, PeriodType } from "./CardType";
export const TabOutReachGraphs = [
  {
    content: [
      {
        title: "Enrollment Statistics",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "H3W3qKV9byz;his3w2bpcFp;d5FaORFvA7w;WnD5wOD0SuO;U5RpgY1j69O;",
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
        api: "/analytics.json?dimension=dx%3AH3W3qKV9byz%3Bhis3w2bpcFp%3Bd5FaORFvA7w%3BWnD5wOD0SuO%3BU5RpgY1j69O&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Household Member Vulnerability Analysis (V.S.4)",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "H3W3qKV9byz;Z0ifXPJ61dy;",
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
        api: "/analytics.json?dimension=dx%3AH3W3qKV9byz%3BZ0ifXPJ61dy&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Household Vulnerability Analysis (V.S.4) ",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "yxVVRrBYlzG;gQmusidzEQw;",
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
        api: "/analytics.json?dimension=dx%3AyxVVRrBYlzG%3BgQmusidzEQw&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },

      {
        title: "Individual Risk Factors",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "GYBf7NJF339;e0QcgeipID4;snhmgVaDYaO;his3w2bpcFp;",
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

        col: 6,
        api: "/analytics.json?dimension=dx%3AGYBf7NJF339%3Be0QcgeipID4%3BsnhmgVaDYaO%3Bhis3w2bpcFp&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Malnourishment Status",
        type: CardType.LINE_COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "Z75B7UsynEM;M6dCGaLPrLh;UdqUZ3mAAZI;",
              type: CardType.COLUMN,
            },
            {
              id: "alGDi1dhF1R",
              type: CardType.LINE,
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

        col: 6,
        api: "/analytics.json?dimension=dx%3AZ75B7UsynEM%3BM6dCGaLPrLh%3BUdqUZ3mAAZI%3BalGDi1dhF1R&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: " Household Risk Factors",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "ZGIuppgLwtT;QdpLSS7EBYZ;",
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
        api: "/analytics.json?dimension=dx%3AZGIuppgLwtT%3BQdpLSS7EBYZ&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Indoor Air Pollution",
        type: CardType.PIE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "T8qbX51FB8H;vxCKJtw9Ig8",
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

        col: 4,
        api: "/analytics.json?dimension=dx%3AT8qbX51FB8H%3BvxCKJtw9Ig8&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },

      {
        title: " TB History",
        type: CardType.PIE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "ZGIuppgLwtT;VzPTzYWOgnU;",
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

        col: 4,
        api: "/analytics.json?dimension=dx%3AZGIuppgLwtT%3BVzPTzYWOgnU&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
      {
        title: "Distance from CHC",
        type: CardType.LINE_COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "F1mE21dlIhI;fF9EPpxJSqB;SdR7099ZyLA;",
              type: CardType.COLUMN,
            },
            {
              id: "GB1f2f4BveZ",
              type: CardType.LINE,
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

        api: "/analytics.json?dimension=dx%3AF1mE21dlIhI%3BfF9EPpxJSqB%3BSdR7099ZyLA%3BGB1f2f4BveZ&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 8,
      },

      {
        title: "Referred Cases",
        type: CardType.PIE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "JmxPClnZt1d;mHkiT3Sl3vj;zr9W3H5CP0I;",
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

        col: 4,

        api: "/analytics.json?dimension=dx%3AJmxPClnZt1d%3BmHkiT3Sl3vj%3Bzr9W3H5CP0I&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT&filter=pe%3A202309",
      },
    ],
  },
];
