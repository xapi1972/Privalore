TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "1",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_0_0_0_map.gif",
           "height": 26,
           "width": 20
          }
         ]
        },
        "pitch": -24.99,
        "yaw": -40.16,
        "hfov": 3.26
       }
      ],
      "id": "overlay_28155963_22D1_8B97_4193_D8AA2924AD14",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_0_0.png",
           "height": 53,
           "width": 40
          }
         ]
        },
        "yaw": -40.16,
        "pitch": -24.99,
        "hfov": 3.26
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA, this.camera_2994CA1D_234A_03F1_4183_F0B7A892C4FD); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_4_0_0_map.gif",
           "height": 57,
           "width": 24
          }
         ]
        },
        "pitch": -26.84,
        "yaw": 26.37,
        "hfov": 4.02
       }
      ],
      "id": "overlay_2EF219D7_22D1_8ABF_41B4_30516E82C033",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_4_0.png",
           "height": 115,
           "width": 49
          }
         ]
        },
        "yaw": 26.37,
        "pitch": -26.84,
        "hfov": 4.02
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F, this.camera_298D4A14_234A_03F7_41C0_9E1D81D2AB1F); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -10.55,
        "yaw": -48.07,
        "hfov": 1.77
       }
      ],
      "id": "overlay_2EFC01FF_22D1_9A6F_41B2_970922FD6CD4",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_3_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -48.07,
        "pitch": -10.55,
        "hfov": 1.77
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -1.13,
        "yaw": -44.46,
        "hfov": 1.8
       }
      ],
      "id": "overlay_2960106C_22D1_9991_41BC_F09B1F79E3CC",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_2_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -44.46,
        "pitch": -1.13,
        "hfov": 1.8
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -38.03,
        "yaw": -105.05,
        "hfov": 4.25
       }
      ],
      "id": "overlay_2EEDA32B_22D1_BF96_41B6_7F36C03B553D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_0_HS_1_0.png",
           "height": 115,
           "width": 60
          }
         ]
        },
        "yaw": -105.05,
        "pitch": -38.03,
        "hfov": 4.25
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421, this.camera_29925A26_234A_03D3_41B3_98804C902DB6); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": {
   "paddingRight": 0,
   "maxWidth": 60,
   "bottom": "17.91%",
   "paddingLeft": 0,
   "borderRadius": 0,
   "maxHeight": 60,
   "transparencyActive": false,
   "borderSize": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "iconURL": "skin/IconButton_06695968_0FCD_0E4F_41A0_6560B40E7960.png",
   "paddingTop": 0,
   "shadow": false,
   "minWidth": 1,
   "cursor": "hand",
   "class": "IconButton",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "left": "25.65%",
   "mode": "push",
   "height": 70,
   "horizontalAlign": "center",
   "id": "IconButton_06695968_0FCD_0E4F_41A0_6560B40E7960",
   "width": 70
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.6,
   "yaw": -42.77
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "2",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 40
          }
         ]
        },
        "pitch": -44.77,
        "yaw": 71.43,
        "hfov": 5.11
       }
      ],
      "id": "overlay_2F1AF404_22F0_9992_41B5_6FD7ABDF8C7D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_0_HS_0_0.png",
           "height": 115,
           "width": 80
          }
         ]
        },
        "yaw": 71.43,
        "pitch": -44.77,
        "hfov": 5.11
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66, this.camera_28A2CB9F_234A_00F1_41B6_8BAC2D5DCF27); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "3",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -23.05,
        "yaw": 120.36,
        "hfov": 4.14
       }
      ],
      "id": "overlay_2FBAFF91_22F3_86B3_419B_EDB3B77115F1",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_2_0.png",
           "height": 114,
           "width": 50
          }
         ]
        },
        "yaw": 120.36,
        "pitch": -23.05,
        "hfov": 4.14
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F, this.camera_2843FA66_234A_0052_41AA_1E9BC0268A9D); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 32
          }
         ]
        },
        "pitch": -29.36,
        "yaw": 165.27,
        "hfov": 5.15
       }
      ],
      "id": "overlay_2F4021C6_22F3_FA91_41BA_1D4361B24B9D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_1_0.png",
           "height": 114,
           "width": 65
          }
         ]
        },
        "yaw": 165.27,
        "pitch": -29.36,
        "hfov": 5.15
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66, this.camera_284A4A6F_234A_0052_41B1_EC9510633D41); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 19
          }
         ]
        },
        "pitch": -12.69,
        "yaw": -43.29,
        "hfov": 3.51
       }
      ],
      "id": "overlay_2F0CC73A_22F3_87F6_41B9_C975AF6F5E6D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_0_HS_0_0.png",
           "height": 114,
           "width": 39
          }
         ]
        },
        "yaw": -43.29,
        "pitch": -12.69,
        "hfov": 3.51
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941, this.camera_29BBCA5D_234A_0076_41B7_6A9F908ADEEC); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "4",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -32.11,
        "yaw": -92.04,
        "hfov": 4.57
       }
      ],
      "id": "overlay_2F439BB3_22F1_8EF7_41B0_ED40C51B0D8B",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_3_0.png",
           "height": 114,
           "width": 60
          }
         ]
        },
        "yaw": -92.04,
        "pitch": -32.11,
        "hfov": 4.57
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66, this.camera_28E77B31_234A_0031_41B1_1A441092AE6C); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -7.64,
        "yaw": -26.01,
        "hfov": 1.78
       }
      ],
      "id": "overlay_2CEB7434_22F7_99F1_41B2_3A3A571DF736",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_2_0.png",
           "height": 114,
           "width": 20
          }
         ]
        },
        "yaw": -26.01,
        "pitch": -7.64,
        "hfov": 1.78
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941, this.camera_28D06B14_234A_01F7_41BF_936DD387F3BF); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 14
          }
         ]
        },
        "pitch": -19.76,
        "yaw": -84.93,
        "hfov": 2.54
       }
      ],
      "id": "overlay_2C9AEEC4_22F7_8692_41A2_4625FADF66B6",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_1_0.png",
           "height": 114,
           "width": 29
          }
         ]
        },
        "yaw": -84.93,
        "pitch": -19.76,
        "hfov": 2.54
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -23.45,
        "yaw": -42.13,
        "hfov": 3.3
       }
      ],
      "id": "overlay_2F3D6B4A_22F0_8F91_41AA_B2B3E93FCCDF",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_0_HS_0_0.png",
           "height": 114,
           "width": 40
          }
         ]
        },
        "yaw": -42.13,
        "pitch": -23.45,
        "hfov": 3.3
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA, this.camera_28D8DB22_234A_01D3_41C0_6EAC38DD97B8); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "5",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -21.03,
        "yaw": 26.18,
        "hfov": 3.36
       }
      ],
      "id": "overlay_2F2BF940_22F0_8B92_419A_06A36407515E",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_3_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": 26.18,
        "pitch": -21.03,
        "hfov": 3.36
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA, this.camera_29EAE9DD_234A_0071_41A6_60307CA68B1B); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -5.49,
        "yaw": 26.81,
        "hfov": 1.79
       }
      ],
      "id": "overlay_2CF22B6E_22F3_8F91_41B2_9BD960425813",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_2_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": 26.81,
        "pitch": -5.49,
        "hfov": 1.79
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F, this.camera_29ED19D3_234A_0071_41AE_D515DA929E78); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": 20.66,
        "yaw": 60.84,
        "hfov": 2.53
       }
      ],
      "id": "overlay_2F269ECD_22F3_8693_41B8_7283489F4F86",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_1_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": 60.84,
        "pitch": 20.66,
        "hfov": 2.53
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_29E169CA_234A_0053_41C1_2DCB2EC8BA4A); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -2.83,
        "yaw": -11.42,
        "hfov": 2.7
       }
      ],
      "id": "overlay_2CF816FF_22F3_866E_41BC_60CBC1BCD543",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_0_HS_0_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -11.42,
        "pitch": -2.83,
        "hfov": 2.7
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 21)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0.38,
   "yaw": -18.5
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "6",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_6_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -50.33,
        "yaw": -133.4,
        "hfov": 4.02
       }
      ],
      "id": "overlay_2C3DF47F_22FF_9A6F_418A_9F5F771A29A6",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_6_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": -133.4,
        "pitch": -50.33,
        "hfov": 4.02
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7, this.camera_287AAAA5_234A_00D1_41B1_4F2252001A2F); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_5_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -34.42,
        "yaw": -105.81,
        "hfov": 4.45
       }
      ],
      "id": "overlay_2DD937A4_22FF_8691_4168_2E3DADD42DAE",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_5_0.png",
           "height": 115,
           "width": 60
          }
         ]
        },
        "yaw": -105.81,
        "pitch": -34.42,
        "hfov": 4.45
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151, this.camera_2811AAC0_234A_004F_41B3_EF64D424F0CC); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_4_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -46.8,
        "yaw": -14.61,
        "hfov": 3.7
       }
      ],
      "id": "overlay_2D4B811C_22FF_BBB1_41BF_E17E889A1B21",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_4_0.png",
           "height": 115,
           "width": 60
          }
         ]
        },
        "yaw": -14.61,
        "pitch": -46.8,
        "hfov": 3.7
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29A388_22D3_9E91_4178_A488414772CB, this.camera_2809BAB7_234A_0031_41A1_E677E8742902); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -31.13,
        "yaw": -24.6,
        "hfov": 3.08
       }
      ],
      "id": "overlay_2C4D67E7_22FF_869F_41BD_C80BC73DC6BD",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_3_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": -24.6,
        "pitch": -31.13,
        "hfov": 3.08
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -18,
        "yaw": -13.43,
        "hfov": 2.57
       }
      ],
      "id": "overlay_2C314EA2_22F0_8691_41B0_EDAF5117239D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_2_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -13.43,
        "pitch": -18,
        "hfov": 2.57
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC, this.camera_28206AD2_234A_0073_41AB_683D71A9183D); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -11.43,
        "yaw": -13.63,
        "hfov": 1.76
       }
      ],
      "id": "overlay_2DFC62EF_22F0_BE6F_41A3_CE505350BCCE",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_1_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -13.63,
        "pitch": -11.43,
        "hfov": 1.76
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2, this.camera_28186AC9_234A_0051_41A4_0C500ED57A33); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -36.69,
        "yaw": 166.95,
        "hfov": 2.17
       }
      ],
      "id": "overlay_2DB6344D_22F0_9993_418C_F4F77FE1DCC3",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_0_HS_0_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": 166.95,
        "pitch": -36.69,
        "hfov": 2.17
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941, this.camera_2801EAAE_234A_00D3_41A4_7022C3A03246); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "7",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -52.1,
        "yaw": 113.68,
        "hfov": 3.87
       }
      ],
      "id": "overlay_330327DA_22F0_86B6_41BA_901F17771A2D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_2_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": 113.68,
        "pitch": -52.1,
        "hfov": 3.87
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_286A8A92_234A_00F3_41B7_94DA06BA731F); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -49.07,
        "yaw": 52.03,
        "hfov": 4.13
       }
      ],
      "id": "overlay_30D27B55_22F0_8FB3_41B1_DBF99584BA53",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_1_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": 52.03,
        "pitch": -49.07,
        "hfov": 4.13
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151, this.camera_28628A89_234A_00D1_41B4_EEC73F780C2E); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -27.85,
        "yaw": 107.78,
        "hfov": 3.18
       }
      ],
      "id": "overlay_3002E8D5_22F7_8AB2_41B4_7EB827646FE4",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_0_HS_0_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": 107.78,
        "pitch": -27.85,
        "hfov": 3.18
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29A388_22D3_9E91_4178_A488414772CB, this.camera_28716A9C_234A_00F7_41A4_0A77553028F6); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "8",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 19
          }
         ]
        },
        "pitch": -27.38,
        "yaw": -92.32,
        "hfov": 3.2
       }
      ],
      "id": "overlay_304B22C3_22F0_BE97_41B1_531B4FD9C242",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_3_0.png",
           "height": 114,
           "width": 39
          }
         ]
        },
        "yaw": -92.32,
        "pitch": -27.38,
        "hfov": 3.2
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_2880DB65_234A_0051_41B2_871E97154E18); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 29
          }
         ]
        },
        "pitch": -43.25,
        "yaw": -78.52,
        "hfov": 3.93
       }
      ],
      "id": "overlay_30050760_22F0_8791_41C1_4D604E61684C",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_2_0.png",
           "height": 114,
           "width": 59
          }
         ]
        },
        "yaw": -78.52,
        "pitch": -43.25,
        "hfov": 3.93
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7, this.camera_28F8CB57_234A_0071_41B5_45C51C20FD7E); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 19
          }
         ]
        },
        "pitch": -20.56,
        "yaw": 16.61,
        "hfov": 3.37
       }
      ],
      "id": "overlay_31C539A9_22F1_8A93_4190_6AA3D318946D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_1_0.png",
           "height": 114,
           "width": 39
          }
         ]
        },
        "yaw": 16.61,
        "pitch": -20.56,
        "hfov": 3.37
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8, this.camera_28911B82_234A_00D3_41AA_207A3DBDC577); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 9
          }
         ]
        },
        "pitch": -14.79,
        "yaw": 19.39,
        "hfov": 1.74
       }
      ],
      "id": "overlay_316EDA3A_22F1_89F1_41C0_023AF0634CD4",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_0_HS_0_0.png",
           "height": 114,
           "width": 19
          }
         ]
        },
        "yaw": 19.39,
        "pitch": -14.79,
        "hfov": 1.74
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F, this.camera_2889EB74_234A_0037_4180_A29038D4FA80); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD666C7_22D3_869F_41BD_C273C730E151_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD666C7_22D3_869F_41BD_C273C730E151",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD666C7_22D3_869F_41BD_C273C730E151_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "9",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 19
          }
         ]
        },
        "pitch": -16.73,
        "yaw": -5.91,
        "hfov": 3.45
       }
      ],
      "id": "overlay_31FF5AA6_22F0_8E91_41B4_37EC035EA483",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_0_HS_1_0.png",
           "height": 114,
           "width": 39
          }
         ]
        },
        "yaw": -5.91,
        "pitch": -16.73,
        "hfov": 3.45
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151, this.camera_2F54EBD3_234A_0072_41B0_FA8F08B055CA); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -44.26,
        "yaw": 137.67,
        "hfov": 4.51
       }
      ],
      "id": "overlay_31B8EFEB_22F0_8697_4181_0B56C1DCE77D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_0_HS_0_0.png",
           "height": 114,
           "width": 70
          }
         ]
        },
        "yaw": 137.67,
        "pitch": -44.26,
        "hfov": 4.51
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F, this.camera_2F5C9BDD_234A_0076_41A4_BF37C924D6E4); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "10",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -12.94,
        "yaw": -101.09,
        "hfov": 2.63
       }
      ],
      "id": "overlay_317D9534_22D1_FBF1_41B3_165F749C1949",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_2_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -101.09,
        "pitch": -12.94,
        "hfov": 2.63
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151, this.camera_29985A2F_234A_03D2_41BC_53B9B7C27BAC); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -44.27,
        "yaw": -115.46,
        "hfov": 4.51
       }
      ],
      "id": "overlay_313BA653_22D1_99B7_41BF_45A0A6C4BDBC",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_1_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": -115.46,
        "pitch": -44.27,
        "hfov": 4.51
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8, this.camera_29A71A38_234A_003E_41A8_8C98B0E3A2D7); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -11.17,
        "yaw": 25.62,
        "hfov": 4.41
       }
      ],
      "id": "overlay_36F45B55_22D1_8FB3_41C0_C371D011AB66",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_0_HS_0_0.png",
           "height": 115,
           "width": 50
          }
         ]
        },
        "yaw": 25.62,
        "pitch": -11.17,
        "hfov": 4.41
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -7.32,
   "yaw": 23.29
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "11",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_5_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -50.08,
        "yaw": -42.7,
        "hfov": 4.04
       }
      ],
      "id": "overlay_345642D0_22D0_9EB2_41B2_797C3B2FAB22",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_5_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": -42.7,
        "pitch": -50.08,
        "hfov": 4.04
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50, this.camera_2838BAEE_234A_0053_41BC_B13B79FEA70C); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_4_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -25.07,
        "yaw": -5.65,
        "hfov": 3.26
       }
      ],
      "id": "overlay_3401578B_22D0_8697_41B6_69921E0F81FE",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_4_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": -5.65,
        "pitch": -25.07,
        "hfov": 3.26
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC, this.camera_28CF1B00_234A_01CF_41BD_98BD448E1F9E); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -14.46,
        "yaw": -5.54,
        "hfov": 1.74
       }
      ],
      "id": "overlay_35CC7AD2_22D0_8EB1_41BE_051564C73DE2",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_3_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -5.54,
        "pitch": -14.46,
        "hfov": 1.74
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2, this.camera_28C77AF7_234A_0031_41A0_A1172D312DE8); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_2_0_0_map.gif",
           "height": 35,
           "width": 10
          }
         ]
        },
        "pitch": -22.36,
        "yaw": 173.83,
        "hfov": 1.66
       }
      ],
      "id": "overlay_357E5DE5_22D3_8A93_41A9_32BA5EB91021",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_2_0.png",
           "height": 71,
           "width": 20
          }
         ]
        },
        "yaw": 173.83,
        "pitch": -22.36,
        "hfov": 1.66
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_1_0_0_map.gif",
           "height": 51,
           "width": 20
          }
         ]
        },
        "pitch": -35.6,
        "yaw": 172.71,
        "hfov": 2.93
       }
      ],
      "id": "overlay_3460650F_22D3_BBAF_4170_9DAF22220D4C",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_1_0.png",
           "height": 102,
           "width": 40
          }
         ]
        },
        "yaw": 172.71,
        "pitch": -35.6,
        "hfov": 2.93
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_2830EAE4_234A_0057_418C_ADA65582B049); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -32.4,
        "yaw": -166.78,
        "hfov": 2.28
       }
      ],
      "id": "overlay_3428E6C6_22D3_8691_41B3_5745801AC39D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_0_HS_0_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -166.78,
        "pitch": -32.4,
        "hfov": 2.28
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7, this.camera_2828FADB_234A_0071_41BF_49201AE6DB8F); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29A388_22D3_9E91_4178_A488414772CB_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29A388_22D3_9E91_4178_A488414772CB",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29A388_22D3_9E91_4178_A488414772CB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "12",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -51.85,
        "yaw": 135.66,
        "hfov": 3.89
       }
      ],
      "id": "overlay_34051120_22DF_BB91_41A1_ECB39AE05B24",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_0_HS_1_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": 135.66,
        "pitch": -51.85,
        "hfov": 3.89
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -48.82,
        "yaw": -157.14,
        "hfov": 4.15
       }
      ],
      "id": "overlay_35BD014B_22DF_9B97_41AB_232011545862",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_0_HS_0_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": -157.14,
        "pitch": -48.82,
        "hfov": 4.15
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29A388_22D3_9E91_4178_A488414772CB, this.camera_28993B91_234A_00F1_4158_396213E29B63); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "13",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_4_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -32.65,
        "yaw": 14.56,
        "hfov": 3.03
       }
      ],
      "id": "overlay_35FC2A06_22D1_8991_41B2_6A22766C9F13",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_4_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": 14.56,
        "pitch": -32.65,
        "hfov": 3.03
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2, this.camera_28B25BB7_234A_0032_41B4_32CAAFEC9446); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 29
          }
         ]
        },
        "pitch": -45.53,
        "yaw": -17.9,
        "hfov": 3.78
       }
      ],
      "id": "overlay_35B5EB2B_22D1_8F97_41B7_9037FDD4D65B",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_3_0.png",
           "height": 115,
           "width": 59
          }
         ]
        },
        "yaw": -17.9,
        "pitch": -45.53,
        "hfov": 3.78
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B, this.camera_28BBFBC1_234A_004E_41B0_DDFCC5E1E7AF); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 14
          }
         ]
        },
        "pitch": -27.85,
        "yaw": -160.21,
        "hfov": 2.39
       }
      ],
      "id": "overlay_356F2E20_22D1_8991_41B4_47B251ADAD1B",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_2_0.png",
           "height": 115,
           "width": 29
          }
         ]
        },
        "yaw": -160.21,
        "pitch": -27.85,
        "hfov": 2.39
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29A388_22D3_9E91_4178_A488414772CB, this.camera_2F434BCA_234A_0052_41BE_9D0F88296494); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -16.48,
        "yaw": -161.92,
        "hfov": 1.73
       }
      ],
      "id": "overlay_350DF2CA_22D1_BE91_41BA_9C0E102D5258",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_1_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -161.92,
        "pitch": -16.48,
        "hfov": 1.73
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_28AA0BAE_234A_00D2_41B7_74BBAD3EBFF4); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 5
          }
         ]
        },
        "pitch": -8.64,
        "yaw": -162.09,
        "hfov": 0.89
       }
      ],
      "id": "overlay_3A927711_22D1_87B3_41BF_AE42E834AE5D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_0_HS_0_0.png",
           "height": 115,
           "width": 10
          }
         ]
        },
        "yaw": -162.09,
        "pitch": -8.64,
        "hfov": 0.89
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "14",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -37.2,
        "yaw": -162.9,
        "hfov": 4.3
       }
      ],
      "id": "overlay_3B97D5D1_22D1_9AB3_417E_D35B8361CF0A",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_2_0.png",
           "height": 115,
           "width": 60
          }
         ]
        },
        "yaw": -162.9,
        "pitch": -37.2,
        "hfov": 4.3
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC, this.camera_29B32A54_234A_0076_41B6_4FDE2459B8D0); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -15.97,
        "yaw": -166.27,
        "hfov": 2.6
       }
      ],
      "id": "overlay_3B4C9952_22D1_8BB1_41A5_A9BBD2779826",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_1_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -166.27,
        "pitch": -15.97,
        "hfov": 2.6
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29A388_22D3_9E91_4178_A488414772CB, this.camera_29B46A4A_234A_0052_41A7_46D6CD5258A3); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -10.42,
        "yaw": -166.97,
        "hfov": 1.77
       }
      ],
      "id": "overlay_38F1ED19_22D1_8BB3_41BA_F022BB415EE8",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_0_HS_0_0.png",
           "height": 115,
           "width": 20
          }
         ]
        },
        "yaw": -166.97,
        "pitch": -10.42,
        "hfov": 1.77
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1, this.camera_29AE9A41_234A_004E_41B0_4B062EBC70F0); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "15",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_4_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -27.85,
        "yaw": -3.63,
        "hfov": 3.18
       }
      ],
      "id": "overlay_3B33DCF9_22D0_8A72_41B6_4C5C5DF4E32E",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_4_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": -3.63,
        "pitch": -27.85,
        "hfov": 3.18
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29781B_22D0_89B7_41B7_C96F35339687, this.camera_29FF99F8_234A_003F_41C0_F4E8C8992E79); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -21.28,
        "yaw": 98.23,
        "hfov": 2.52
       }
      ],
      "id": "overlay_38BC2E66_22D0_8991_418E_AAE286177FD8",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_3_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": 98.23,
        "pitch": -21.28,
        "hfov": 2.52
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD6AC14_22D0_89B2_4195_F56552861469, this.camera_29FB0A01_234A_03D1_4185_1DE070AC152B); this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -31.89,
        "yaw": 89.84,
        "hfov": 3.06
       }
      ],
      "id": "overlay_3B3E1FB5_22D1_86F3_417E_EEC25FACC9BA",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_2_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": 89.84,
        "pitch": -31.89,
        "hfov": 3.06
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8, this.camera_29F679E6_234A_0053_41B5_D263211B49D5); this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -35.93,
        "yaw": -157.48,
        "hfov": 2.91
       }
      ],
      "id": "overlay_38DD5CE3_22D1_8A97_41BE_DD0F82AEC67A",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_1_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": -157.48,
        "pitch": -35.93,
        "hfov": 2.91
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC, this.camera_29F389EF_234A_0051_41BB_17E7DC2A478F); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_0_0_0_map.gif",
           "height": 23,
           "width": 20
          }
         ]
        },
        "pitch": -39.18,
        "yaw": 176.75,
        "hfov": 2.79
       }
      ],
      "id": "overlay_3883BADF_22D1_8EAF_41C1_789275EB89E8",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_0_HS_0_0.png",
           "height": 46,
           "width": 40
          }
         ]
        },
        "yaw": 176.75,
        "pitch": -39.18,
        "hfov": 2.79
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "16",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -29.11,
        "yaw": -8.99,
        "hfov": 3.93
       }
      ],
      "id": "overlay_38A67E07_22D1_899F_41AD_D406FF8A77E6",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_0_HS_1_0.png",
           "height": 115,
           "width": 50
          }
         ]
        },
        "yaw": -8.99,
        "pitch": -29.11,
        "hfov": 3.93
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B, this.camera_2980EA0B_234A_03D1_41B6_4B466DE39BA7); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -18.25,
        "yaw": -4.59,
        "hfov": 2.56
       }
      ],
      "id": "overlay_384921DE_22D1_9AB1_4170_FAED1A6F7F51",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_0_HS_0_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": -4.59,
        "pitch": -18.25,
        "hfov": 2.56
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A29781B_22D0_89B7_41B7_C96F35339687_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A29781B_22D0_89B7_41B7_C96F35339687",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A29781B_22D0_89B7_41B7_C96F35339687_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "17",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_3_0_0_map.gif",
           "height": 57,
           "width": 14
          }
         ]
        },
        "pitch": -20,
        "yaw": 4.91,
        "hfov": 2.54
       }
      ],
      "id": "overlay_39ECB444_232F_9991_41C1_25624A2C8ADB",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_3_0.png",
           "height": 115,
           "width": 29
          }
         ]
        },
        "yaw": 4.91,
        "pitch": -20,
        "hfov": 2.54
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 29
          }
         ]
        },
        "pitch": -39.97,
        "yaw": 13.44,
        "hfov": 4.14
       }
      ],
      "id": "overlay_38324600_232F_F991_419A_4CDB4CA566B0",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_2_0.png",
           "height": 115,
           "width": 59
          }
         ]
        },
        "yaw": 13.44,
        "pitch": -39.97,
        "hfov": 4.14
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 14
          }
         ]
        },
        "pitch": -19.94,
        "yaw": -2.53,
        "hfov": 2.54
       }
      ],
      "id": "overlay_3F0FD259_2330_99B2_41B9_659BFBFF1315",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_1_0.png",
           "height": 115,
           "width": 29
          }
         ]
        },
        "yaw": -2.53,
        "pitch": -19.94,
        "hfov": 2.54
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B, this.camera_28F75B4E_234A_0053_41BD_D94B6DEAFA9D); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -7.89,
        "yaw": -169.86,
        "hfov": 3.57
       }
      ],
      "id": "overlay_3E8A8695_2331_86B2_41B0_841C9E616E54",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_0_HS_0_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": -169.86,
        "pitch": -7.89,
        "hfov": 3.57
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD69840_22D0_8991_41BA_C4EC129E599C, this.camera_28E8AB3F_234A_0031_41AA_4E78BE67CC66); this.mainPlayList.set('selectedIndex', 19)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD6AC14_22D0_89B2_4195_F56552861469_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD6AC14_22D0_89B2_4195_F56552861469",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD6AC14_22D0_89B2_4195_F56552861469_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "18",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_2_0_0_map.gif",
           "height": 57,
           "width": 30
          }
         ]
        },
        "pitch": -44.77,
        "yaw": 160.22,
        "hfov": 3.83
       }
      ],
      "id": "overlay_3899F5A3_2330_9A97_41C1_1419DC80D030",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_2_0.png",
           "height": 115,
           "width": 60
          }
         ]
        },
        "yaw": 160.22,
        "pitch": -44.77,
        "hfov": 3.83
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B, this.camera_285ACA80_234A_00CF_4198_94C08FCB1D5C); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 20
          }
         ]
        },
        "pitch": -28.86,
        "yaw": 30.47,
        "hfov": 3.15
       }
      ],
      "id": "overlay_38DD0A88_2333_8E92_419E_4871868FB3B4",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_1_0.png",
           "height": 115,
           "width": 40
          }
         ]
        },
        "yaw": 30.47,
        "pitch": -28.86,
        "hfov": 3.15
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 15
          }
         ]
        },
        "pitch": -22.29,
        "yaw": 11.83,
        "hfov": 2.5
       }
      ],
      "id": "overlay_3F244B1A_2333_8FB1_41B2_8D2C945FCB83",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_0_HS_0_0.png",
           "height": 115,
           "width": 30
          }
         ]
        },
        "yaw": 11.83,
        "pitch": -22.29,
        "hfov": 2.5
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD69840_22D0_8991_41BA_C4EC129E599C, this.camera_28521A78_234A_003E_41AB_55AC06AB7165); this.mainPlayList.set('selectedIndex', 19)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "19",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -28.35,
        "yaw": -159.56,
        "hfov": 3.96
       }
      ],
      "id": "overlay_38DFE7BA_2331_86F6_4171_32AE325C511D",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_0_HS_1_0.png",
           "height": 115,
           "width": 50
          }
         ]
        },
        "yaw": -159.56,
        "pitch": -28.35,
        "hfov": 3.96
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 35
          }
         ]
        },
        "pitch": -41.24,
        "yaw": -36.89,
        "hfov": 4.74
       }
      ],
      "id": "overlay_3F295A8C_2331_8E91_41AE_8CFC107CBA3E",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_0_HS_0_0.png",
           "height": 115,
           "width": 70
          }
         ]
        },
        "yaw": -36.89,
        "pitch": -41.24,
        "hfov": 4.74
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A297426_22D0_999E_4193_BDC10CA00BFC",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "20",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -33.91,
        "yaw": -122.93,
        "hfov": 3.73
       }
      ],
      "id": "overlay_3F89EC57_2330_89BF_41BF_B5A5E75A462E",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_0_HS_1_0.png",
           "height": 115,
           "width": 50
          }
         ]
        },
        "yaw": -122.93,
        "pitch": -33.91,
        "hfov": 3.73
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8, this.camera_29D909B7_234A_0031_41BF_FB225F814A6A); this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 25
          }
         ]
        },
        "pitch": -4.35,
        "yaw": 142.84,
        "hfov": 4.49
       }
      ],
      "id": "overlay_3FE0E495_2330_BAB2_41B6_1AC9D545D6D7",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_0_HS_0_0.png",
           "height": 115,
           "width": 50
          }
         ]
        },
        "yaw": 142.84,
        "pitch": -4.35,
        "hfov": 4.49
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2BD6AC14_22D0_89B2_4195_F56552861469, this.camera_29E599C1_234A_0051_41B2_779752EF27A3); this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_r_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_f_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_b_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_u_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_d_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_l_hq.jpeg",
       "height": 1272,
       "width": 1272
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD69840_22D0_8991_41BA_C4EC129E599C",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "21",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 24
          }
         ]
        },
        "pitch": -9.79,
        "yaw": 23.04,
        "hfov": 4.33
       }
      ],
      "id": "overlay_37298050_22D0_99B1_4192_44CDD6528754",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_0_HS_0_0.png",
           "height": 114,
           "width": 49
          }
         ]
        },
        "yaw": 23.04,
        "pitch": -9.79,
        "hfov": 4.33
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_r_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_f_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_b_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_u_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_d_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_l_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.16,
   "yaw": 24.27
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "22",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 14
          }
         ]
        },
        "pitch": -6,
        "yaw": 4.98,
        "hfov": 2.62
       }
      ],
      "id": "overlay_3695C4D3_22D1_9AB7_41B5_0D91B0C8E5BA",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_0_HS_0_0.png",
           "height": 114,
           "width": 29
          }
         ]
        },
        "yaw": 4.98,
        "pitch": -6,
        "hfov": 2.62
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_r_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_f_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_b_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_u_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_d_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_l_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "label": "23",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_0_HS_0_0_0_map.gif",
           "height": 57,
           "width": 10
          }
         ]
        },
        "pitch": -0.95,
        "yaw": -1.52,
        "hfov": 1.76
       }
      ],
      "id": "overlay_36734D48_22D0_8B91_41BA_E58C911F5FDE",
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_0_HS_0_0.png",
           "height": 114,
           "width": 20
          }
         ]
        },
        "yaw": -1.52,
        "pitch": -0.95,
        "hfov": 1.76
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_r_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_f_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_b_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_u_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_d_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_l_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F",
  "hfovMin": 60,
  "partial": false,
  "pitch": 0,
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.34,
   "yaw": 2.12
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_2B7ACA25_22D3_8993_41BE_B1C4C5216F66_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_2BD6AE5D_22D3_89B3_4158_615E8E012421_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_2A29E234_22D3_99F1_41A0_2F3049752BAA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_2A29963D_22D3_99F3_41AC_BAB5809C082F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_2A29EA58_22D3_89B1_41BA_4B7315A71941_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_2A299E94_22D3_86B1_4185_B5B0B44F5CB1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_2A29D2DF_22D3_BEAF_41A8_6D4C64AA99D7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_2BD666C7_22D3_869F_41BD_C273C730E151_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_2A29AAE1_22D3_8E93_4193_0060302B41F8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_2A29BF0A_22D3_8796_419D_876BB5E7134F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29A388_22D3_9E91_4178_A488414772CB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_2A29A388_22D3_9E91_4178_A488414772CB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_2A2997D4_22D3_86B1_41A1_C3BEF61B2F50_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_2A29ABBB_22D3_8EF5_41B0_DF1B5A9E03EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_2A299FD6_22D3_86B1_419E_93B0BF061FD2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_2A2963F1_22D3_7E73_41C1_67BE667C850B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A29781B_22D0_89B7_41B7_C96F35339687",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_2A29781B_22D0_89B7_41B7_C96F35339687_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD6AC14_22D0_89B2_4195_F56552861469",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_2BD6AC14_22D0_89B2_4195_F56552861469_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_2BD6D01E_22D0_99B1_417D_92D233041EE8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2A297426_22D0_999E_4193_BDC10CA00BFC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_2A297426_22D0_999E_4193_BDC10CA00BFC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD69840_22D0_8991_41BA_C4EC129E599C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_2BD69840_22D0_8991_41BA_C4EC129E599C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_2BD69C7D_22D0_8A73_41A1_C8D748AC72CD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_2BD6B17F_22D0_BA6F_419F_8FDD0FA26915_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "camera": "this.panorama_2BD6A62F_22D0_B9EF_41BF_13EC68EB910F_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29D909B7_234A_0031_41BF_FB225F814A6A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -168.17
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29E599C1_234A_0051_41B2_779752EF27A3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 10.14
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29E169CA_234A_0053_41C1_2DCB2EC8BA4A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -13.05
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29ED19D3_234A_0071_41AE_D515DA929E78",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 153.99
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29EAE9DD_234A_0071_41A6_60307CA68B1B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 136.71
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29F679E6_234A_0053_41B5_D263211B49D5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -19.78
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29F389EF_234A_0051_41BB_17E7DC2A478F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 162.1
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29FF99F8_234A_003F_41C0_F4E8C8992E79",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 171.01
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29FB0A01_234A_03D1_4185_1DE070AC152B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 177.47
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2980EA0B_234A_03D1_41B6_4B466DE39BA7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 176.37
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_298D4A14_234A_03F7_41C0_9E1D81D2AB1F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 87.96
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2994CA1D_234A_03F1_4183_F0B7A892C4FD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -14.73
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29925A26_234A_03D3_41B3_98804C902DB6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -108.57
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29985A2F_234A_03D2_41BC_53B9B7C27BAC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -160.61
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29A71A38_234A_003E_41A8_8C98B0E3A2D7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -42.33
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29AE9A41_234A_004E_41B0_4B062EBC70F0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 166.37
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29B46A4A_234A_0052_41A7_46D6CD5258A3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 174.46
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29B32A54_234A_0076_41B6_4FDE2459B8D0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -165.44
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_29BBCA5D_234A_0076_41B7_6A9F908ADEEC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -153.82
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2843FA66_234A_0052_41AA_1E9BC0268A9D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 137.87
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_284A4A6F_234A_0052_41B1_EC9510633D41",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 139.84
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28521A78_234A_003E_41AB_55AC06AB7165",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 57.07
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_285ACA80_234A_00CF_4198_94C08FCB1D5C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -90.16
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28628A89_234A_00D1_41B4_EEC73F780C2E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 101.48
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_286A8A92_234A_00F3_41B7_94DA06BA731F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 46.6
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28716A9C_234A_00F7_41A4_0A77553028F6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 13.22
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_287AAAA5_234A_00D1_41B1_4F2252001A2F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -66.32
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2801EAAE_234A_00D3_41A4_7022C3A03246",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -119.16
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2809BAB7_234A_0031_41A1_E677E8742902",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -7.29
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2811AAC0_234A_004F_41B3_EF64D424F0CC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 87.68
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28186AC9_234A_0051_41A4_0C500ED57A33",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 13.03
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28206AD2_234A_0073_41AB_683D71A9183D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 18.08
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2828FADB_234A_0071_41BF_49201AE6DB8F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -72.22
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2830EAE4_234A_0057_418C_ADA65582B049",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 165.39
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2838BAEE_234A_0053_41BC_B13B79FEA70C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 22.86
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28C77AF7_234A_0031_41A0_A1172D312DE8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 13.73
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28CF1B00_234A_01CF_41BD_98BD448E1F9E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 19.79
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28D06B14_234A_01F7_41BF_936DD387F3BF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -153.19
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28D8DB22_234A_01D3_41C0_6EAC38DD97B8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -59.64
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28E77B31_234A_0031_41B1_1A441092AE6C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -153.63
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28E8AB3F_234A_0031_41AA_4E78BE67CC66",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -37.16
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28F75B4E_234A_0053_41BD_D94B6DEAFA9D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -81.77
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28F8CB57_234A_0071_41B5_45C51C20FD7E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -127.97
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2880DB65_234A_0051_41B2_871E97154E18",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 74.19
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2889EB74_234A_0037_4180_A29038D4FA80",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 78.91
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28911B82_234A_00D3_41AA_207A3DBDC577",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 174.09
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28993B91_234A_00F1_4158_396213E29B63",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 137.3
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28A2CB9F_234A_00F1_41B6_8BAC2D5DCF27",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 74.95
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28AA0BAE_234A_00D2_41B7_74BBAD3EBFF4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 166.57
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28B25BB7_234A_0032_41B4_32CAAFEC9446",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 17.1
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_28BBFBC1_234A_004E_41B0_DDFCC5E1E7AF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 22.52
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2F434BCA_234A_0052_41BE_9D0F88296494",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 174.35
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2F54EBD3_234A_0072_41B0_FA8F08B055CA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -163.39
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2F5C9BDD_234A_0076_41A4_BF37C924D6E4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 64.54
  }
 }
], "children": [
 {
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderRadius": 3,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeight": 10,
  "borderSize": 0,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "playbackBarRight": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "transitionMode": "blending",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "playbackBarBorderRadius": 0
 },
 {
  "horizontalAlign": "left",
  "paddingRight": 0,
  "children": [
   {
    "paddingRight": 0,
    "width": "100%",
    "height": "100%",
    "top": "0%",
    "maxWidth": 557,
    "maxHeight": 237,
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "minHeight": 1,
    "paddingTop": 0,
    "shadow": false,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "left": "0%",
    "class": "Image",
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "id": "Image_05988FCD_0FD7_0246_4193_1B66ED5C1BA5",
    "url": "skin/Image_05988FCD_0FD7_0246_4193_1B66ED5C1BA5.png"
   }
  ],
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0,
  "top": "83.08%",
  "layout": "absolute",
  "bottom": "0%",
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "minHeight": 1,
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "left": "0%",
  "overflow": "scroll",
  "class": "Container",
  "paddingBottom": 0,
  "right": "77.7%",
  "scrollBarMargin": 2,
  "scrollBarColor": "#000000",
  "gap": 10,
  "id": "Container_06DD8D4D_0FDB_0641_4199_5BB27F2715DE"
 },
 {
  "horizontalAlign": "left",
  "paddingRight": 0,
  "children": [
   "this.IconButton_06695968_0FCD_0E4F_41A0_6560B40E7960",
   {
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowOpacity": 1,
    "toolTipBorderSize": 1,
    "paddingRight": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipTextShadowOpacity": 0,
    "toolTipBorderRadius": 3,
    "toolTipTextShadowColor": "#000000",
    "maxWidth": 100,
    "toolTipPaddingTop": 4,
    "bottom": "21.14%",
    "paddingLeft": 0,
    "toolTipShadowHorizontalLength": 0,
    "borderRadius": 0,
    "maxHeight": 100,
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "borderSize": 0,
    "verticalAlign": "middle",
    "toolTipPaddingBottom": 4,
    "toolTipShadowSpread": 0,
    "minHeight": 1,
    "iconURL": "skin/IconButton_0666DB9A_0FCD_02C2_41A3_F73327065D4C.png",
    "paddingTop": 0,
    "toolTip": "Fullscreen",
    "toolTipPaddingLeft": 6,
    "shadow": false,
    "minWidth": 1,
    "toolTipFontSize": 12,
    "toolTipFontColor": "#606060",
    "toolTipOpacity": 1,
    "toolTipPaddingRight": 6,
    "class": "IconButton",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "cursor": "hand",
    "right": "11.58%",
    "toolTipBorderColor": "#767676",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontStyle": "normal",
    "mode": "toggle",
    "height": 53.05,
    "horizontalAlign": "center",
    "toolTipShadowColor": "#333333",
    "id": "IconButton_0666DB9A_0FCD_02C2_41A3_F73327065D4C",
    "width": 70.01,
    "toolTipFontWeight": "normal",
    "toolTipFontFamily": "Arial"
   }
  ],
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0,
  "top": "86.48%",
  "layout": "absolute",
  "bottom": "0%",
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "minHeight": 1,
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "left": "85.9%",
  "overflow": "scroll",
  "class": "Container",
  "paddingBottom": 0,
  "right": "0%",
  "scrollBarMargin": 2,
  "scrollBarColor": "#000000",
  "gap": 10,
  "id": "Container_055EF3CD_0FCB_0241_4188_D15B6B7610DB"
 }
], 
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "start": "this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_06695968_0FCD_0E4F_41A0_6560B40E7960], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_0666DB9A_0FCD_02C2_41A3_F73327065D4C].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "width": "100%",
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "existsKey": function(key){    return key in window; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getKey": function(key){    return window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "registerKey": function(key, value){    window[key] = value; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingTop": 0,
 "shadow": false,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "class": "Player",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "buttonToggleFullscreen": "this.IconButton_0666DB9A_0FCD_02C2_41A3_F73327065D4C"
})