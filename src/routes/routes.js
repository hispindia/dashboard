import DiseaseSpecificMalariaDashboard from "../pages/Dashboard/DiseaseSpecificMalariaDashboard";
import IntegratedTBHIVMalariaDashboard from "../pages/Dashboard/IntegratedTBHIVMalariaDashboard";
import TBtreatmentAndHealthFacilitySurveillanceDashboard from "../pages/Dashboard/TBtreatmentAndHealthFacilitySurveillanceDashboard";
import Main from "../pages/Main";
import TBoutReachDashboard1 from "../pages/Dashboard/TBoutReachDashboard1";
import HepatitisDashboard from "../pages/Dashboard/HepatitisDashboard";
import HivDashboard from "../pages/Dashboard/HivDashboard";

export const appRoutes = [
    // {
    //     path: "/home",
    //     title: "Integrated TB, HIV, Malaria dashboard",
    //     component: <Main />,
    // },
    {
        path: "/",
        title: "Disease-specific dashboard",
        component: <IntegratedTBHIVMalariaDashboard />,
    },
    {
        path: "*",
        title: "Disease-specific dashboard",
        component: <IntegratedTBHIVMalariaDashboard />,
    },
    {
        path: "/hiv-&-sti",
        title: "HIV, STI, Hepatitis",
        component: <HivDashboard />,
    },
    {
        path: "/hepatitis",
        title: "Hepatitis",
        component: <HepatitisDashboard />,
    },
    {
        path: "/tb-outreach",
        title: "TB Outreach",
        component: <TBoutReachDashboard1 />,
    },
    {
        path: "/tb-treatment-and-health-facility-surveillance",
        title: "TB Treatment and Health Facility Surveillance",
        component: <TBtreatmentAndHealthFacilitySurveillanceDashboard />,
    },
    {
        path: "/malaria",
        title: "Malaria",
        component: <DiseaseSpecificMalariaDashboard />,
    },

]

export const malariaRoute = [
    {
        title: 'Malaria',
        path: '/malaria'
    },
]
export const tbRoute = [
    {
        title: 'TB Outreach',
        path: '/tb-outreach'
    },
    {
        path: "/tb-treatment-and-health-facility-surveillance",
        title: "TB Treatment and Health Facility Surveillance",
    },
]
export const hospitalRoute = [
    {
        path: "/hepatitis",
        title: "Hepatitis",
    },
    {
        path: "/hiv-&-sti",
        title: "HIV, STI, Hepatitis",
    },
]