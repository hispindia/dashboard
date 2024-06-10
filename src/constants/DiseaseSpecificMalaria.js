import { CardType, PeriodType } from "./CardType";
export const DiseaseSpecificMalaria = [
  {
    col: 6,
    content: [
      {
        title: "Malaria FOCI Identified & Registered (Last Five years)",
        type: CardType.LINE_COLUMN,
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
          orgUnit: {
            method: "filter=ou:"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AEUpiJ49j6lO&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },

      {
        title: "Malaria mortality rate",
        type: CardType.TREE,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "TA1grcSgVnX;",
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

        api: "/analytics.json?dimension=dx%3ATA1grcSgVnX&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2019",
        col: 6,
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
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AJpMbhbefB8J&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2019",
        col: 6,
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
            method: "dimension=pe",
            count: 1,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AjPKoHM4z6Ml&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT%2Cpe%3A2019",
        col: 6,
      },
      ,
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
            count: 3,
          },
          org: {
            method: "filter=ou"
          },
          others: "",
        },

        api: "/analytics.json?dimension=dx%3AjMInVuQ72th%3BtcdyQ9bq94S%3Bq7H2p8IilbG&dimension=pe%3ATHIS_YEAR%3BLAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "IRS - Number of houses sprayed",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "LEtkrrzMhOB;wZBd5EwZv9o;Xu606hMwY27;BQf80MGrklk;",
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

        api: "/analytics.json?dimension=dx%3ALEtkrrzMhOB%3BwZBd5EwZv9o%3BXu606hMwY27%3BBQf80MGrklk&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm",
        col: 6,
      },
      {
        title: "IRS - Number of houses not sprayed",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "J35sOXdEiyQ;yIhEh7JWVoP;hNdhCpfc1CG;",
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

        api: "/analytics.json?dimension=dx%3AJ35sOXdEiyQ%3ByIhEh7JWVoP%3BhNdhCpfc1CG&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm",
        col: 6,
      },
      {
        title: "Number of parasitologically confirmed malaria cases",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "K3jbHGHhK1i;U0dcSREeyrj;SNadcBGWrSh;HmFpIJVMgvs;",
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

        api: "/analytics.json?dimension=dx%3AK3jbHGHhK1i%3BU0dcSREeyrj%3BSNadcBGWrSh%3BHmFpIJVMgvs&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm",
        col: 6,
      },
      {
        title: "Total Malaria Consultations per age last 5 years",
        type: CardType.STACKED_COLUMN,

        attributes: {
          dataElementMethod: "dimension=EEkW0a5o7KY:kWOvenCHtLT;W11jMZuTxwX;FZKizVcnG73;smwFjI6QT69&filter=dx",
          dataElements: [
            {
              id: "QHzKBYAeJXG;kWOvenCHtLT;W11jMZuTxwX;FZKizVcnG73;smwFjI6QT69;",
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
        api: "/analytics.json?dimension=EEkW0a5o7KY%3AkWOvenCHtLT%3BW11jMZuTxwX%3BFZKizVcnG73%3BsmwFjI6QT69&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm%2Cdx%3AQHzKBYAeJXG",
        col: 6,
      },
      {
        title: "Total Malaria Consultations",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "QHzKBYAeJXG;",
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

        api: "/analytics.json?dimension=dx%3AQHzKBYAeJXG&dimension=pe%3A201801%3B201802%3B201803%3B201804%3B201805%3B201806%3B201807%3B201808%3B201809%3B201810%3B201811%3B201812&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm",
        col: 6,
      },
      {
        title: "Total Malaria Pregnant Consultations",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "nHqAdccoRYp;",
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

        api: "/analytics.json?dimension=dx%3AnHqAdccoRYp&dimension=pe%3A201801%3B201802%3B201803%3B201804%3B201805%3B201806%3B201807%3B201808%3B201809%3B201810%3B201811%3B201812&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AFn51zf6ifbm",
        col: 6,
      },
      {
        title: "Number of Pregnant Malaria Cases - last 5 years",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "KgExIVexHV3;",
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

        api: "/analytics.json?dimension=dx%3AKgExIVexHV3&dimension=pe%3ALAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "Number of Pregnant Malaria Cases - last 5",
        type: "map",
        api: "",
        col: 8,
      },
      {
        title: "IRS - Quantity of Insecticides used",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "DijOZLuFi0M;",
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

        api: "/analytics.json?dimension=dx%3ADijOZLuFi0M&dimension=pe%3ATHIS_YEAR%3BLAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
      {
        title: "IRS - Population protected and not protected by IRS",
        type: CardType.COLUMN,
        attributes: {
          dataElementMethod: "dimension=dx",
          dataElements: [
            {
              id: "CfxqWb9FuTD;Hut7GIDHtuN;",
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

        api: "/analytics.json?dimension=dx%3ACfxqWb9FuTD%3BHut7GIDHtuN&dimension=pe%3ATHIS_YEAR%3BLAST_5_YEARS&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=ou%3AUSER_ORGUNIT",
        col: 6,
      },
    ],
  },
];
