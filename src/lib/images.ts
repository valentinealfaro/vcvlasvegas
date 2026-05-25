/**
 * Curated luxury image library for VCV Vegas.
 * All images are hosted on Firebase Storage. Alt text is Vegas-focused.
 */

const BASE =
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0881087059.firebasestorage.app/o/page_images';

export type LuxeImage = {
  src: string;
  alt: string;
  caption?: string;
};

export const kitchenImages: LuxeImage[] = [
  {
    src: `${BASE}%2FKitchen%20Images%2FScreenshot%202026-03-15%20113348.png?alt=media&token=ecf8a2c8-70c4-4cce-bc5a-ac87aa965f61`,
    alt: 'Modern luxury kitchen with waterfall island in a Las Vegas home',
    caption: 'Summerlin · Waterfall Island Kitchen',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FScreenshot%202026-03-15%20113809.png?alt=media&token=ad2ae44d-7407-42c2-a860-aa27d5cfc7cc`,
    alt: 'Custom luxury kitchen remodel with matte black hardware in Las Vegas',
    caption: 'Henderson · Custom Cabinetry',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FScreenshot%202026-03-15%20114104.png?alt=media&token=539f0f58-182c-4ed5-afcb-bf9701e7f056`,
    alt: 'Designer kitchen with quartz countertops in a Las Vegas estate',
    caption: 'Paradise · Designer Quartz',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FVCV%20Service%20Kitchen.jpg?alt=media&token=c576f388-cd07-4484-b129-b14c64a0589f`,
    alt: 'Open-concept luxury kitchen remodel in Las Vegas',
    caption: 'Centennial Hills · Open Concept',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FVCV%20Services%20Lawton%20OK%20Kitchen%20Contractor.jpg?alt=media&token=96e83ff1-3e21-4258-901f-9cbc1776dad1`,
    alt: 'High-end Las Vegas kitchen with custom finishes',
    caption: 'Spring Valley · Chef’s Kitchen',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2Fkitchen-remodel-lawton-ok-vcv-services.jpg?alt=media&token=10e575d3-9079-4b41-9a9c-5e81751d8405`,
    alt: 'Renovated luxury kitchen with island seating in Las Vegas',
    caption: 'Mountains Edge · Island Seating',
  },
];

export const bathroomImages: LuxeImage[] = [
  {
    src: `${BASE}%2FBathroom%20Images%2Fwalk-in-shower-bathroom-remodel-lawton-ok-vcv-services.webp.png?alt=media&token=a79e59de-b332-4f0d-8841-6a9d366451d3`,
    alt: 'Frameless walk-in shower in a luxury Las Vegas bathroom',
    caption: 'Frameless Glass Walk-In',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2Fbathroom-remodel-white-floor-tile-lawton-ok.webp.png?alt=media&token=ee538c9c-3483-4af6-9a34-a6fa8fc5db98`,
    alt: 'Spa-style luxury bathroom remodel with white tile in Las Vegas',
    caption: 'Spa Suite Tile',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2Fbathroom-remodel-lawton-ok-vcv-services.webp.png?alt=media&token=ab48fec8-62fe-4d5c-bcde-04c6705a0801`,
    alt: 'Modern bathroom remodel with floating vanity in Las Vegas',
    caption: 'Floating Vanity',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2Fbathroom-remodel-beige-tile-black-hardware-lawton-ok.webp.png?alt=media&token=18fe9436-cc69-43f4-a33f-2dbe3091e241`,
    alt: 'Warm beige luxury bath with matte black fixtures in Las Vegas',
    caption: 'Warm Stone + Matte Black',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2FNew%20Tub%20and%20Tile%20Tub%20Surround%20in%20Lawton%20OK%20by%20VCV%20Services.png?alt=media&token=6788aa92-0da9-491c-a04f-7ffd2c5873dd`,
    alt: 'Custom soaking tub and tile surround in a Las Vegas bathroom',
    caption: 'Soaking Tub Surround',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2FBathroom%20Remodel%20in%20Lawton%20Oklahoma%20by%20VCV%20Services.png?alt=media&token=e4c3197d-0bcb-4588-8292-74e00f0e4c0e`,
    alt: 'Full luxury bathroom remodel in a Las Vegas estate',
    caption: 'Estate Bath Renovation',
  },
];

export const remodelImages: LuxeImage[] = [
  {
    src: `${BASE}%2FHome%20Remodeling%20Images%2FKitchen-Remodeling-in-Lawton.jpg?alt=media&token=040e1216-5355-4bf7-81f0-8b852e8547cf`,
    alt: 'Luxury full home remodel kitchen in Las Vegas',
    caption: 'Full Home · Kitchen Phase',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FScreenshot%202026-03-15%20114104.png?alt=media&token=539f0f58-182c-4ed5-afcb-bf9701e7f056`,
    alt: 'Whole-home remodel kitchen transformation in Las Vegas',
    caption: 'Open Plan Conversion',
  },
  {
    src: `${BASE}%2FKitchen%20Images%2FVCV%20Service%20Kitchen.jpg?alt=media&token=c576f388-cd07-4484-b129-b14c64a0589f`,
    alt: 'Remodel kitchen open concept Las Vegas',
    caption: 'Living + Kitchen Combine',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2Fbathroom-remodel-beige-tile-black-hardware-lawton-ok.webp.png?alt=media&token=18fe9436-cc69-43f4-a33f-2dbe3091e241`,
    alt: 'Master bath inside a Las Vegas home remodel',
    caption: 'Primary Suite Bath',
  },
  {
    src: `${BASE}%2FBathroom%20Images%2FNew%20Tub%20and%20Tile%20Tub%20Surround%20in%20Lawton%20OK%20by%20VCV%20Services.png?alt=media&token=6788aa92-0da9-491c-a04f-7ffd2c5873dd`,
    alt: 'Renovated tub surround in a Las Vegas remodel',
    caption: 'Heritage Tub Conversion',
  },
];

export const customHomeImages: LuxeImage[] = [
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fresidential-home-builder-lawton-ok-vcv-services-5.jpg.jpg?alt=media&token=d9fe871d-5800-4242-976a-bc2ccf378359`,
    alt: 'Luxury custom home exterior in the Las Vegas metro',
    caption: 'Modern Estate Build',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fnew-home-construction-lawton-ok-vcv-services-1.jpg.jpg?alt=media&token=d58b4f65-4338-4da3-ae3e-ecb26dc6d3ca`,
    alt: 'New construction luxury home in Las Vegas',
    caption: 'New Construction',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fnew-build-home-lawton-ok-vcv-services-6.jpg.jpg?alt=media&token=1f1b051d-8d4d-4b4e-b2fb-1d3d25aeea55`,
    alt: 'Newly built luxury Las Vegas residence',
    caption: 'Desert Modern Build',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fluxury-home-builder-lawton-ok-vcv-services-4.jpg.jpg?alt=media&token=25853b63-f57a-440e-bf17-5387c7dc55f4`,
    alt: 'Luxury home builder project in Las Vegas',
    caption: 'Custom Architecture',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fhome-builder-lawton-ok-new-construction-vcv-services-3.jpg.jpg?alt=media&token=99061acd-5181-44ff-93c6-49f406bd949a`,
    alt: 'High-end home build in the Las Vegas valley',
    caption: 'High-End Build',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fcustom-home-construction-lawton-ok-vcv-services-2.jpg.jpg?alt=media&token=baace107-db3a-47fa-81fa-771285b84ee2`,
    alt: 'Custom home under construction in Las Vegas',
    caption: 'In Progress',
  },
  {
    src: `${BASE}%2FCustom%20Home%20Images%2Fcustom-home-builder-lawton-ok-vcv-services-1.jpg.jpg?alt=media&token=0e728bcd-0108-41db-845b-2b97bc8ff383`,
    alt: 'Architectural custom home in Las Vegas',
    caption: 'Architectural Build',
  },
];

export const flooringImages: LuxeImage[] = [
  {
    src: `${BASE}%2FHardwood%20Floor%20Images%2F233_resized.jpg?alt=media&token=be031f49-e72d-4944-8d89-8a46bf19534c`,
    alt: 'Wide-plank hardwood flooring in a Las Vegas luxury home',
    caption: 'Wide-Plank Hardwood',
  },
  {
    src: `${BASE}%2FHardwood%20Floor%20Images%2F234_resized.jpg?alt=media&token=fb9ef3e7-7750-48b2-b78a-1c35e1fc495f`,
    alt: 'Hardwood floor installation in Las Vegas',
    caption: 'Refinished Hardwood',
  },
  {
    src: `${BASE}%2FHardwood%20Floor%20Images%2F237_resized.jpg?alt=media&token=8975851d-23f7-42eb-98fa-059f855b28e5`,
    alt: 'Custom hardwood flooring project in Las Vegas',
    caption: 'Whole-Home Flooring',
  },
  {
    src: `${BASE}%2FHardwood%20Floor%20Images%2F238_resized.jpg?alt=media&token=ab7e2ecd-553a-4d69-9c65-b56c5326cd26`,
    alt: 'Modern hardwood floor in a Las Vegas remodel',
    caption: 'Modern Plank',
  },
  {
    src: `${BASE}%2FHardwood%20Floor%20Images%2F239_resized.jpg?alt=media&token=cff3148d-2316-46a1-9c12-88c42ba0dae1`,
    alt: 'Refinished hardwood flooring in a Las Vegas home',
    caption: 'Estate Refinish',
  },
];

export const paintingImages: LuxeImage[] = [
  {
    src: `${BASE}%2FInterior%20and%20Exterior%20Painting%20Images%2F387E8DA1-8DCF-4DA0-839A-DE2AD65A0295.jpeg?alt=media&token=47bfa9bd-e307-41c3-8c3d-35ddeb9aedc0`,
    alt: 'Interior painting in a luxury Las Vegas home',
    caption: 'Whole-Home Interior',
  },
  {
    src: `${BASE}%2FInterior%20and%20Exterior%20Painting%20Images%2Finterior%20painting%20in%20lawton%20oklahoma%20by%20vcv%20services.jpg?alt=media&token=fbf6ba5e-cde5-4b88-abaf-5c918f48ac59`,
    alt: 'Designer interior paint finish in a Las Vegas residence',
    caption: 'Designer Interior',
  },
  {
    src: `${BASE}%2FInterior%20and%20Exterior%20Painting%20Images%2FPainting%20Services%20Lawton%20Oklahoma%20VCV%20Services.png?alt=media&token=247eda0a-9330-4857-9f05-af7742e5ee86`,
    alt: 'Painting service in a luxury Las Vegas home',
    caption: 'Estate Painting',
  },
  {
    src: `${BASE}%2FInterior%20and%20Exterior%20Painting%20Images%2FInterior%20Painting%20Contractor%20in%20Lawton%20Oklahoma%20VCV%20Services.jpg?alt=media&token=0cae1e12-f0bb-45a7-9d38-bb58eae31b9e`,
    alt: 'Interior painting contractor in Las Vegas',
    caption: 'Premium Wall Finish',
  },
  {
    src: `${BASE}%2FInterior%20and%20Exterior%20Painting%20Images%2FInterior%20Painter%20in%20Lawton%20Oklahoma%20VCV%20Services.jpeg?alt=media&token=41afb1ae-8ca0-4d5a-b341-df1fdb622306`,
    alt: 'Interior painter working in a Las Vegas residence',
    caption: 'Detail Painting',
  },
];

export const roofingImages: LuxeImage[] = [
  {
    src: `${BASE}%2FRoofing%20Images%2F473832166_18028088000618713_1296453056645454201_n-1-1024x768.jpg?alt=media&token=59f2dfec-0a73-442c-b774-a73a91693f12`,
    alt: 'Premium roof replacement in Las Vegas',
    caption: 'Premium Roof Replacement',
  },
  {
    src: `${BASE}%2FRoofing%20Images%2FIMG_0628.jpg?alt=media&token=d8d67df4-8165-47a0-a404-91583c3d8559`,
    alt: 'Luxury home roofing installation in Las Vegas',
    caption: 'Luxury Roof Install',
  },
  {
    src: `${BASE}%2FRoofing%20Images%2FIMG_1472.jpg?alt=media&token=8cab6d12-0dcf-4608-9667-831950bbeef3`,
    alt: 'Detail of new roofing project in Las Vegas',
    caption: 'Detail Work',
  },
  {
    src: `${BASE}%2FRoofing%20Images%2FIMG_1474.jpg?alt=media&token=4df8f321-055f-4816-8e02-52c848ff37a2`,
    alt: 'Tile roof finish on a Las Vegas estate',
    caption: 'Tile Roof Finish',
  },
  {
    src: `${BASE}%2FRoofing%20Images%2Ffmf_wVWm6nB.jpg?alt=media&token=955db222-86b3-445b-85ac-34772df313f2`,
    alt: 'Completed roofing project in Las Vegas',
    caption: 'Completed Roof',
  },
];

export const stormImages: LuxeImage[] = [
  {
    src: `${BASE}%2FInsurance%20Claim%20Images%2F173.jpg?alt=media&token=73def259-bc95-453f-8d3b-4b800c3e7ba5`,
    alt: 'Insurance claim restoration project in Las Vegas',
    caption: 'Restoration Project',
  },
  {
    src: `${BASE}%2FRoofing%20Images%2FIMG_2274.jpg?alt=media&token=1357086d-17e2-4bc3-8476-c88fbc704e03`,
    alt: 'Storm restoration roofing in Las Vegas',
    caption: 'Storm Restoration',
  },
  {
    src: `${BASE}%2FInsurance%20Claim%20Images%2F181.jpg?alt=media&token=537dfce2-6350-4478-86b2-40118bec7ef3`,
    alt: 'Insurance damage restoration in Las Vegas',
    caption: 'Damage Restoration',
  },
];

export const drywallImages: LuxeImage[] = [
  {
    src: `${BASE}%2FDrywall%20Repair%20Images%2Flawton%20ok%20sheetrock%20installer%20contractor%20vcv%20services.png?alt=media&token=0672f44a-9e7b-44a4-9c05-ae3c76ecb114`,
    alt: 'Drywall installation in a Las Vegas remodel',
    caption: 'Drywall Install',
  },
  {
    src: `${BASE}%2FDrywall%20Repair%20Images%2Fdrywall%20and%20sheetrock%20installers%20lawton%20ok.jpg?alt=media&token=f671d898-8b5c-473c-9d84-e3cc129b65e1`,
    alt: 'Drywall and sheetrock work in Las Vegas',
    caption: 'Smooth Finish Drywall',
  },
];

export const sidingImages: LuxeImage[] = [
  {
    src: `${BASE}%2FVinyl%20Siding%20Contractor%20Installer%20in%20Lawton%20OK%20by%20VCV%20Services.png?alt=media&token=7abf5e92-1d19-4093-bbb6-0f86c283301b`,
    alt: 'New siding install on a Las Vegas home',
    caption: 'New Siding Install',
  },
  {
    src: `${BASE}%2FSiding%20Contractor%20Installer%20in%20Lawton%20OK%20by%20VCV%20Services.png?alt=media&token=9c212005-19ce-421f-af9e-fd0387514f1c`,
    alt: 'Siding contractor at a Las Vegas residence',
    caption: 'Siding Contractor',
  },
  {
    src: `${BASE}%2FVinyl%20Siding%20Lawton%20Oklahoma%20by%20VCV%20Services.png?alt=media&token=6ea1d990-8a67-4103-8cc2-28b78d7aa183`,
    alt: 'Modern siding in a Las Vegas community',
    caption: 'Modern Siding',
  },
  {
    src: `${BASE}%2Fvinyl%20siding%20install%20in%20Lawton%20Ok%20by%20VCV%20Services.png?alt=media&token=1e38bc5d-3883-4dc3-8965-9aa1f490f392`,
    alt: 'Siding installation detail in Las Vegas',
    caption: 'Installation Detail',
  },
];

export const windowImages: LuxeImage[] = [
  {
    src: `${BASE}%2FWindow%20Replacement%20Images%2FWindow%20Contractor%20Lawton%20OK.jpg?alt=media&token=d28f9ef9-db4f-4bd9-b2d8-f77471ea8fab`,
    alt: 'Window replacement in a Las Vegas home',
    caption: 'Custom Window Replacement',
  },
  {
    src: `${BASE}%2FWindow%20Replacement%20Images%2FWindow%20Replacement%20Lawton%20.png?alt=media&token=1c89e099-799c-423a-81e9-a06d7e4a1eed`,
    alt: 'New windows on a Las Vegas residence',
    caption: 'Energy-Efficient Glass',
  },
  {
    src: `${BASE}%2FWindow%20Replacement%20Images%2FWindow%20Replacement%20Lawton%2C%20OK%20VCV%20Services.jpg?alt=media&token=43fd0dd9-b5b6-424e-b5ca-264641ca5edb`,
    alt: 'Window installation project in Las Vegas',
    caption: 'Whole-Home Window Install',
  },
];

export const doorImages: LuxeImage[] = [
  {
    src: `${BASE}%2FDoor%20Installation%20Images%2F148.jpg?alt=media&token=f662fcc1-9d60-4e51-b280-59734f36fd6a`,
    alt: 'Custom door installation in a Las Vegas home',
    caption: 'Custom Door Install',
  },
  {
    src: `${BASE}%2FDoor%20Installation%20Images%2F161.jpg?alt=media&token=90693196-2ee4-4e53-8e7a-0f87ca302d6e`,
    alt: 'Interior door finish detail in Las Vegas',
    caption: 'Interior Finish',
  },
  {
    src: `${BASE}%2FDoor%20Installation%20Images%2FExterior%20Door%20Installation%20in%20Lawton%20Ok%20by%20VCV%20Services.jpg?alt=media&token=8fc991e8-1c2d-46e7-9002-b64a9c8f6970`,
    alt: 'Exterior door installation in a Las Vegas residence',
    caption: 'Exterior Door',
  },
  {
    src: `${BASE}%2FDoor%20Installation%20Images%2FReplacing%20%20Interior%20Door%20Lawton%20OK%20By%20VCV%20Services.jpg?alt=media&token=40ccd8dc-6b2c-4c65-abae-2929c58b333f`,
    alt: 'Interior door replacement in Las Vegas',
    caption: 'Interior Replacement',
  },
];

export const heroGalleryImages: LuxeImage[] = [
  kitchenImages[0],
  bathroomImages[0],
  kitchenImages[1],
  bathroomImages[2],
  customHomeImages[0],
  kitchenImages[3],
];

export const allShowcaseImages: LuxeImage[] = [
  ...kitchenImages,
  ...bathroomImages,
  ...remodelImages,
  ...customHomeImages,
  ...flooringImages,
];
