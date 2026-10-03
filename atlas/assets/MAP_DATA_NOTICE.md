# Map data notice

The public Atlas India outline is generated from **Survey of India Administrative Boundary Database** data supplied by the user from the Survey of India Online Maps Portal.

- Source authority: Survey of India
- Product family: Administrative Boundary Database
- Free product listing: OVSF/1M/7 (Entire country up to district level with HQ) or OVSF/1M/6 (Entire country up to taluk level with HQ)
- Geometry file selected by converter: `STATE_BOUNDARY.shp`
- Source CRS: `PROJCS["LCC_WGS84",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Lambert_Conformal_Conic"],PARAMETER["False_Easting",4000000.0],PARAMETER["False_Northing",4000000.0],PARAMETER["Central_Meridian",80.0],PARAMETER["Standard_Parallel_1",12.472944],PARAMETER["Standard_Parallel_2",35.172806],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",24.0],UNIT["Meter",1.0]]`
- Transformation: where required, the official source CRS is transformed to WGS84 longitude/latitude; administrative polygons are dissolved to an external outline, simplified only for web rendering, and projected linearly into the existing Atlas marker coordinate frame.
- WGS84 bounds after conversion: `(68.177512, 6.752783, 97.412897, 37.088342)`
- The Atlas does not use this map to make any prevalence claim. Markers denote the state/UT field of reviewed corpus records.

The source boundary geometry is not manually redrawn by the Atlas. Regenerate this asset when Survey of India releases a materially updated official boundary dataset.
