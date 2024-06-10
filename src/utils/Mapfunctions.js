import { sortBy, isString, compact } from "lodash";

export const destructureCordinates=(data) => {

    const coordinates = data.map((cord) => {

    let coord = JSON.parse(cord.co);

    if (cord.ty == 2) {
      if (cord.co.substring(0, 4) === "[[[[") coord = coord[0][0][0];
      else coord = coord[0][0];
    }
    return {
      type: "Feature",
      id: cord.pi,
      parentName: cord.pn,
      geometry: {
        coordinates: coord,
      },
    };
  });

    // const featuresLatLng = sortBy(data, ["le"]).map((ou) => {
    //     const coord = JSON.parse(ou.co);
    //     let gpid = "";
    //     let gppg = "";
    //     let type = "Point";

    //     if (ou.ty === 2) {
    //       type = "Polygon";
    //       if (ou.co.substring(0, 4) === "[[[[") {
    //         type = "MultiPolygon";
    //       }
    //     }

    //     // Grand parent
    //     if (isString(ou.pg) && ou.pg.length) {
    //       const ids = compact(ou.pg.split("/"));

    //       // Grand parent id
    //       if (ids.length >= 2) {
    //         gpid = ids[ids.length - 2];
    //       }

    //       // Grand parent parent graph
    //       if (ids.length > 2) {
    //         gppg = "/" + ids.slice(0, ids.length - 2).join("/");
    //       }
    //     }
    //     return {
    //       type: "Feature",
    //       id: ou.id,
    //       geometry: {
    //         type,
    //         coordinates: coord,
    //       },
    //       properties: {
    //         type,
    //         id: ou.id,
    //         name: ou.na,
    //         hasCoordinatesDown: ou.hcd,
    //         hasCoordinatesUp: ou.hcu,
    //         level: ou.le,
    //         grandParentParentGraph: gppg,
    //         grandParentId: gpid,
    //         parentGraph: ou.pg,
    //         parentId: ou.pi,
    //         parentName: ou.pn,
    //         // dimensions: ou.dimensions,
    //       },
    //     };
    //   }) .filter(
    //       ({ geometry }) =>
    //         Array.isArray(geometry.coordinates) &&
    //         geometry.coordinates.length &&
    //         geometry.coordinates.flat().length
    //     )

        return {
            type: "FeatureCollection",
            crs: {
              type: "name",
              properties: {
                name: "urn:ogc:def:crs:EPSG::31493",
              },
            },
            features: coordinates,
          }
}