import { CardType, PeriodType } from "./CardType";
export const TBtreatmentAndHealthFacilitySurveillance = [
  {
    col: 4,
    content: [
      {
        title: "Number of Pulmonary TB cases Diagnosed",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "A8R6w6L3dcv;",
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

        col: 3,
        api: "/analytics.json?dimension=dx%3AA8R6w6L3dcv&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
      {
        title: "Percentage of Pulmonary TB who were put on DOTS",
        type: CardType.PIE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "diCvgMpTxKT;",
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
        col: 3,

        api: "/analytics.json?dimension=dx%3AdiCvgMpTxKT&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309%3BTHIS_MONTH",
      },
      {
        title: "Number of Extrapulmonary TB cases Diagnosed",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "uh4DMi0Nzl6;",
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

        col: 3,
        api: "/analytics.json?dimension=dx%3Auh4DMi0Nzl6&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
      {
        title: "Percentage of Extrapulmonary TB patients put on DOTS",
        type: CardType.PIE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "RDVzp3aGKKv;",
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
        col: 3,

        api: "/analytics.json?dimension=dx%3ARDVzp3aGKKv&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
      {
        title: "DOTS Administration",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "mseeigZB0Ei;zKgDHItWYYh;Mx3rIUMyrYr;",
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
        api: "/analytics.json?dimension=dx%3AmseeigZB0Ei%3BzKgDHItWYYh%3BMx3rIUMyrYr&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "RR-TB",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "R08yZEX7MJl;aaGkOhcPw0q;",
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
        api: "/analytics.json?dimension=dx%3AR08yZEX7MJl%3BaaGkOhcPw0q&dimension=pe%3A202309&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },

      [
        {
          title: "Number of TB patients cured",
          type: CardType.DONUT,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "oYoWo50k0jU;",
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

          col: 12,
          api: "/analytics.json?dimension=dx%3AoYoWo50k0jU&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
        },
        {
          title: "Number of TB patients tested positive for HIV",
          type: CardType.TREE,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "l2muzX2aNUj;",
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

          col: 12,
          api: "/analytics.json?dimension=dx%3Al2muzX2aNUj&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
        },
      ],

      {
        title: "Number of TB Presumptive referred for sputum examination",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "QuodzmiSs7p;Lp8vV3F4YBD;Y6QcuxNGDXW;iXoxM805JHF;",
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
        api: "/analytics.json?dimension=dx%3AQuodzmiSs7p%3BLp8vV3F4YBD%3BY6QcuxNGDXW%3BiXoxM805JHF&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Bacteriologically confirmed TB cases",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "uYqP369Npw;DFNeaMZda1D;",
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
        api: "/analytics.json?dimension=dx%3AuYqP369Npw3%3BDFNeaMZda1D&dimension=pe%3A2023&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
      },
      {
        title: "Pulmonary TB cases bacteriologically confirmed by mWRD",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "m87PqslzmKV;",
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

        col: 3,
        api: "/analytics.json?dimension=dx%3Am87PqslzmKV&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2023",
      },
      {
        title:
          "Number of TB presumptive referred for WHO endorsed rapid molecular diagnosis (mWRD)",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "E86fpxvcKXX;",
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

        col: 3,
        api: "/analytics.json?dimension=dx%3AE86fpxvcKXX&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2023",
      },
      {
        title: "Number of TB patients tested for Diabetes Mellitus",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "fahEUIf0P5m;",
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

        col: 3,
        api: "/analytics.json?dimension=dx%3AfahEUIf0P5m&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
      {
        title: "Number of patients received treatment unsupervised",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "EP5tRmNO4YR;",
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
        col: 3,

        api: "/analytics.json?dimension=dx%3AEP5tRmNO4YR&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
      },
    ],
  },
];
