import { CardType, PeriodType } from "./CardType";

export const MalaridashboardGraphs = [
  {
    title: "TUBERCULOSIS",
    col: 4,
    content: [
      {
        title: "Progress towards End TB milestones / SDG target - 1",
        type: CardType.LINE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "nZnndzrtweb;yYnUhaub0lE;UZjDrM0fXsi;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 12,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
          // others: "filter=ou:USER_ORGUNIT",
        },
        api: "/analytics.json?dimension=dx%3AnZnndzrtweb%3ByYnUhaub0lE%3BUZjDrM0fXsi&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022%3B2023%3B2024%3B2025%3B2026&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "Progress towards End TB milestones / SDG target - 2",
        type: CardType.LINE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "JHmc047zY14;h7QtYP1qOhB;DeohyfOPLY9;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 12,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
          // others: "filter=ou:USER_ORGUNIT",
        },
        // dataElement: [
        //   {
        //     id: "JHmc047zY14;h7QtYP1qOhB;DeohyfOPLY9;",
        //     type: CardType.LINE,
        //   },
        // ],
        // period: {
        //   method: PeriodType.DIMENSION,
        //   type: PeriodType.YEAR,
        //   count: 12,
        // },

        api: "/analytics.json?dimension=dx%3AJHmc047zY14%3Bh7QtYP1qOhB%3BDeohyfOPLY9&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022%3B2023%3B2024%3B2025%3B2026&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "TB affected families facing catastrophic costs due to TB (%)",
        type: CardType.LINE,

        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "tVKvphO6I7M;EC92tqgIGQR;oZFKJAzYgdF;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 12,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },
        api: "/analytics.json?dimension=dx%3AtVKvphO6I7M%3BEC92tqgIGQR%3BoZFKJAzYgdF&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022%3B2023%3B2024%3B2025%3B2026&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "Achievement of TB cases All forms",
        type: CardType.LINE_COLUMN,
        dualAxis: true,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "xHYLaSiQPs5;ZEWUjxaxqzg;",
              type: CardType.COLUMN,
            },
            {
              id: "vtW9Il7TBPf;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 6,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AxHYLaSiQPs5%3BZEWUjxaxqzg%3BvtW9Il7TBPf&dimension=pe%3A2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "TB Notification Rate",
        type: CardType.LINE_COLUMN,
        dualAxis: true,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "ZbokqCfuadU;",
              type: CardType.COLUMN,
            },
            {
              id: "hvAtj3ANa4o;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 8,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AZbokqCfuadU%3BhvAtj3ANa4o&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "Trend % of child TB among new and relapse cases",
        type: CardType.LINE_COLUMN,
        dualAxis: true,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "V8hdA8jkC97;Zi7VGxFjVBx;",
              type: CardType.COLUMN,
            },
            {
              id: "aiLqYj7QpUA;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 8,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AV8hdA8jkC97%3BZi7VGxFjVBx%3BaiLqYj7QpUA&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title:
          "Trend in Pulmonary bacteriological confirmed cases , pulmonary clinical diagnosed and extrapulmonary cases",
        type: CardType.LINE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "I516j0XNUT8;yKF0VvTRsai;bLMWFtCk9GT;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 8,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AI516j0XNUT8%3ByKF0VvTRsai%3BbLMWFtCk9GT&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title:
          "Number and proportion of new and relapse cases by bacteriological confirmation",
        type: CardType.LINE_COLUMN,
        dualAxis: true,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "I516j0XNUT8;yKF0VvTRsai;",
              type: CardType.COLUMN,
            },
            {
              id: "WO1fJnZKWse;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 8,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AI516j0XNUT8%3ByKF0VvTRsai%3BWO1fJnZKWse&dimension=pe%3A2015%3B2016%3B2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },

      [
        {
          title: "Percentage cases of TB tested for HIV",
          type: CardType.DONUT,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "jLIrIZqlnqt;",
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

          api: "/analytics.json?dimension=dx%3AjLIrIZqlnqt&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202309",
          col: 12,
        },
        {
          title: "DS-TB Treatment Coverage",
          type: CardType.DONUT,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "SlJrbqjVImh;",
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

          api: "/analytics.json?dimension=dx%3ASlJrbqjVImh&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3ALAST_MONTH",
          col: 12,
        },
      ],
    ],
  },

  {
    title: "HIV CASCADE OF CARE",
    col: 4,
    content: [
      {
        title: "Percentage of PLHIV who know their HIV status",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "OaRH4AnWmBZ;",
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

        api: "/analytics.json?dimension=dx%3AOaRH4AnWmBZ&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2022",
        col: 3,
      },
      {
        title: "Percentage of PLHIV who know their status and on ART",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "h49g5F7nvRI;",
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

        api: "/analytics.json?dimension=dx%3Ah49g5F7nvRI&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2022",
        col: 3,
      },
      {
        title: "Percentage of PLHIV on ART received Viral Load Test",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "hH3WJujN9Xl;",
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

        api: "/analytics.json?dimension=dx%3AhH3WJujN9Xl&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2022",
        col: 3,
      },
      {
        title: "Percentage of PLHIV on ART with suppressed viral load",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "wajAlHbymip;",
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

        api: "/analytics.json?dimension=dx%3AwajAlHbymip&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202308",
        col: 3,
      },
      {
        title: "Trend of Estimated number of People living with HIV",
        type: CardType.LINE_COLUMN,
        dualAxis: false,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "sfSOa9J9Txg;",
              type: CardType.COLUMN,
            },
            {
              id: "sfSOa9J9Txg;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 6,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AsfSOa9J9Txg&dimension=pe%3A2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "PLHIVs on ART with viral suppression",
        type: CardType.LINE_COLUMN,
        dualAxis: false,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "ysPMqPUxB82;",
              type: CardType.COLUMN,
            },
            {
              id: "ysPMqPUxB82;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 6,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AysPMqPUxB82&dimension=pe%3A2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "EMTCT Cascade",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "FI2D8uGlEGH;iUeLvYpK0nc;pZN4PKYTn3t;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 6,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AFI2D8uGlEGH%3BiUeLvYpK0nc%3BpZN4PKYTn3t&dimension=pe%3A2017%3B2018%3B2019%3B2020%3B2021%3B2022&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 8,
      },
      [
        {
          title:
            "Percentage of HIV positive results among the total HIV tests performed",
          type: CardType.DONUT,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "L7RZ4qLbDdB;",
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

          api: "/analytics.json?dimension=dx%3AL7RZ4qLbDdB&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
          col: 12,
        },
        {
          title: "PLHIV Defaulted Treatment",
          type: CardType.TREE,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "owlJKy3wNNV;",
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

          api: "/analytics.json?dimension=dx%3AowlJKy3wNNV&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202307",
          col: 12,
        },
        {
          title: "Estimated No. of people newly infected with HIV",
          type: CardType.TREE,
          attributes: {
            dataElementMethod: "dimension=dx",
            dataElements: [
              {
                id: "JuhilGOzuMn;",
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

          api: "/analytics.json?dimension=dx%3AJuhilGOzuMn&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A202308",
          col: 12,
        },
      ],
    ],
  },
  {
    title: "MALARIA",
    content: [
      {
        title: "Malaria FOCI Identified & Registered (Last Five years)",
        type: CardType.LINE_COLUMN,
        dualAxis: false,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "EUpiJ49j6lO;",
              type: CardType.COLUMN,
            },
            {
              id: "EUpiJ49j6lO;",
              type: CardType.LINE,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 5,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AEUpiJ49j6lO&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 4,
      },
      {
        title: "Malaria Investigation Statistics",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "jMInVuQ72th;tcdyQ9bq94S;q7H2p8IilbG;",
              type: CardType.COLUMN,
            },
          ],
          period: {
            type: PeriodType.YEAR,
            method: "dimension=pe",
            count: 5,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AjMInVuQ72th%3BtcdyQ9bq94S%3Bq7H2p8IilbG&dimension=pe%3ATHIS_YEAR%3BLAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 8,
      },
      {
        title: "Percentage of household received IRS",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "JpMbhbefB8J;",
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

        api: "/analytics.json?dimension=dx%3AJpMbhbefB8J&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2019",
        col: 4,
      },
      {
        title: "Percentage of suspected Malaria received parasitological test",
        type: CardType.DONUT,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "jPKoHM4z6Ml;",
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

        api: "/analytics.json?dimension=dx%3AjPKoHM4z6Ml&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2019",
        col: 4,
      },
      {
        title: "Confirmed Malaria Cases",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "WiiNMBJucP9;",
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

        api: "/analytics.json?dimension=dx%3AWiiNMBJucP9&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2023",
        col: 4,
      },
    ],
  },
];
