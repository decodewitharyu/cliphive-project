interface Resource {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  downloadUrl: string;
  category: string;
  isPremium?: boolean;
}

interface Category {
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  thumbnailUrl: string;
  resources: Resource[];
}

interface CategoryData {
  videoEditing: Category;
  photoEditing: Category;
  soundEffects: Category;
  colorGrading: Category;
  typography: Category;
  motionGraphics: Category;
  overlays: Category;
}

export const categoryData: CategoryData = {
  videoEditing: {
    title: "Video Editing",
    description: "Professional video editing resources and templates",
    icon: "VideoIcon",
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    thumbnailUrl: "/thumbnails/categories/video-editing.jpg",
    resources: [
      {
        id: "ve1",
        title: "Cinematic LUTs Pack",
        description: "Professional color grading presets for cinematic looks",
        thumbnailUrl: "/thumbnails/video-editing/cinematic-luts.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-luts-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
      {
        id: "ve2",
        title: "Transition Pack Pro",
        description: "Smooth and professional video transitions",
        thumbnailUrl: "/thumbnails/video-editing/transitions.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-transitions-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
      {
        id: "ve3",
        title: "Sound Effects Bundle",
        description: "Essential sound effects for video editing",
        thumbnailUrl: "/thumbnails/video-editing/sound-effects.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-sound-effects-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
      {
        id: "ve4",
        title: "Title Templates Pack",
        description: "Modern and animated title templates",
        thumbnailUrl: "/thumbnails/video-editing/titles.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-titles-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
      {
        id: "ve5",
        title: "Video Overlay Effects",
        description: "Professional video overlays and effects",
        thumbnailUrl: "/thumbnails/video-editing/overlays.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-overlays-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
      {
        id: "ve6",
        title: "Premiere Pro Presets",
        description: "Ready-to-use presets for Premiere Pro",
        thumbnailUrl: "/thumbnails/video-editing/presets.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-presets-file-id/view?usp=sharing",
        category: "video-editing",
        isPremium: true
      },
    ]
  },
  photoEditing: {
    title: "Photo Editing",
    description: "High-quality photo editing resources and presets",
    icon: "ImageIcon",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    thumbnailUrl: "/thumbnails/categories/photo-editing.jpg",
    resources: [
      {
        id: "pe1",
        title: "Portrait Presets",
        description: "Professional Lightroom presets for portraits",
        thumbnailUrl: "/thumbnails/photo-editing/portrait-presets.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-portrait-presets-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
      {
        id: "pe2",
        title: "Landscape Collection",
        description: "Nature and landscape photography presets",
        thumbnailUrl: "/thumbnails/photo-editing/landscape-presets.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-landscape-presets-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
      {
        id: "pe3",
        title: "Film Emulation Pack",
        description: "Classic film look presets",
        thumbnailUrl: "/thumbnails/photo-editing/film-presets.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-film-presets-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
      {
        id: "pe4",
        title: "Photoshop Actions",
        description: "Professional Photoshop action set",
        thumbnailUrl: "/thumbnails/photo-editing/actions.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-actions-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
      {
        id: "pe5",
        title: "Overlay Pack",
        description: "Light leaks and texture overlays",
        thumbnailUrl: "/thumbnails/photo-editing/overlays.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-overlays-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
      {
        id: "pe6",
        title: "Mobile Presets",
        description: "Lightroom mobile preset collection",
        thumbnailUrl: "/thumbnails/photo-editing/mobile-presets.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-mobile-presets-file-id/view?usp=sharing",
        category: "photo-editing",
        isPremium: true
      },
    ]
  },
  soundEffects: {
    title: "Sound Effects",
    description: "High-quality sound effects and music",
    icon: "Music4Icon",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    thumbnailUrl: "/thumbnails/categories/sound-effects.jpg",
    resources: [
      {
        id: "se1",
        title: "Cinematic SFX",
        description: "Professional cinematic sound effects",
        thumbnailUrl: "/thumbnails/sound-effects/cinematic.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-cinematic-sfx-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
      {
        id: "se2",
        title: "Transition Sounds",
        description: "Whoosh and transition effects",
        thumbnailUrl: "/thumbnails/sound-effects/transitions.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-transitions-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
      {
        id: "se3",
        title: "Background Music",
        description: "Royalty-free background tracks",
        thumbnailUrl: "/thumbnails/sound-effects/music.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-background-music-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
      {
        id: "se4",
        title: "UI Sound Pack",
        description: "Interface and notification sounds",
        thumbnailUrl: "/thumbnails/sound-effects/ui-sounds.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-ui-sounds-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
      {
        id: "se5",
        title: "Nature Sounds",
        description: "Environmental and nature recordings",
        thumbnailUrl: "/thumbnails/sound-effects/nature.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-nature-sounds-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
      {
        id: "se6",
        title: "Logo Audio Pack",
        description: "Professional logo sound effects",
        thumbnailUrl: "/thumbnails/sound-effects/logo-sounds.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-logo-sounds-file-id/view?usp=sharing",
        category: "sound-effects",
        isPremium: true
      },
    ]
  },
  colorGrading: {
    title: "Color Grading",
    description: "Professional color grading tools and LUTs",
    icon: "PaletteIcon",
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    thumbnailUrl: "/thumbnails/categories/color-grading.jpg",
    resources: [
      {
        id: "cg1",
        title: "Cinema LUTs",
        description: "Hollywood-style color grading LUTs",
        thumbnailUrl: "/thumbnails/color-grading/cinema.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-cinema-luts-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
      {
        id: "cg2",
        title: "Moody Pack",
        description: "Dark and moody color grades",
        thumbnailUrl: "/thumbnails/color-grading/moody.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-moody-pack-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
      {
        id: "cg3",
        title: "Vintage Film",
        description: "Classic film emulation LUTs",
        thumbnailUrl: "/thumbnails/color-grading/vintage.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-vintage-film-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
      {
        id: "cg4",
        title: "Travel Collection",
        description: "Travel and lifestyle color grades",
        thumbnailUrl: "/thumbnails/color-grading/travel.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-travel-collection-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
      {
        id: "cg5",
        title: "Music Video LUTs",
        description: "Stylized music video looks",
        thumbnailUrl: "/thumbnails/color-grading/music-video.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-music-video-luts-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
      {
        id: "cg6",
        title: "Natural Pack",
        description: "Natural and clean color grades",
        thumbnailUrl: "/thumbnails/color-grading/natural.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-natural-pack-file-id/view?usp=sharing",
        category: "color-grading",
        isPremium: true
      },
    ]
  },
  typography: {
    title: "Typography",
    description: "Premium fonts and typography resources",
    icon: "TypeIcon",
    color: "rose",
    gradient: "from-rose-500 to-pink-500",
    thumbnailUrl: "/thumbnails/categories/typography.jpg",
    resources: [
      {
        id: "ty1",
        title: "Modern Sans Pack",
        description: "Contemporary sans-serif fonts",
        thumbnailUrl: "/thumbnails/typography/modern-sans.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-modern-sans-pack-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
      {
        id: "ty2",
        title: "Elegant Serifs",
        description: "Classic serif font collection",
        thumbnailUrl: "/thumbnails/typography/elegant-serif.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-elegant-serifs-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
      {
        id: "ty3",
        title: "Script Bundle",
        description: "Handwritten and script fonts",
        thumbnailUrl: "/thumbnails/typography/script.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-script-bundle-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
      {
        id: "ty4",
        title: "Display Collection",
        description: "Eye-catching display fonts",
        thumbnailUrl: "/thumbnails/typography/display.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-display-collection-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
      {
        id: "ty5",
        title: "Logo Fonts",
        description: "Perfect fonts for branding",
        thumbnailUrl: "/thumbnails/typography/logo-fonts.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-logo-fonts-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
      {
        id: "ty6",
        title: "Font Duo Pack",
        description: "Perfectly paired font combinations",
        thumbnailUrl: "/thumbnails/typography/font-duos.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-font-duo-pack-file-id/view?usp=sharing",
        category: "typography",
        isPremium: true
      },
    ]
  },
  motionGraphics: {
    title: "Motion Graphics",
    description: "After Effects templates and animations",
    icon: "BoxIcon",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    thumbnailUrl: "/thumbnails/categories/motion-graphics.jpg",
    resources: [
      {
        id: "mg1",
        title: "Logo Animations",
        description: "Professional logo reveal templates",
        thumbnailUrl: "/thumbnails/motion-graphics/logo-reveals.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-logo-animations-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
      {
        id: "mg2",
        title: "Title Animations",
        description: "Dynamic title and text animations",
        thumbnailUrl: "/thumbnails/motion-graphics/titles.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-title-animations-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
      {
        id: "mg3",
        title: "Infographic Pack",
        description: "Animated infographic templates",
        thumbnailUrl: "/thumbnails/motion-graphics/infographics.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-infographic-pack-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
      {
        id: "mg4",
        title: "Transitions Pack",
        description: "Smooth motion transitions",
        thumbnailUrl: "/thumbnails/motion-graphics/transitions.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-transitions-pack-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
      {
        id: "mg5",
        title: "Social Media Pack",
        description: "Templates for social media",
        thumbnailUrl: "/thumbnails/motion-graphics/social.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-social-media-pack-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
      {
        id: "mg6",
        title: "Character Animation",
        description: "2D character animation kit",
        thumbnailUrl: "/thumbnails/motion-graphics/characters.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-character-animation-file-id/view?usp=sharing",
        category: "motion-graphics",
        isPremium: true
      },
    ]
  },
  overlays: {
    title: "Overlays & Effects",
    description: "Professional video overlays and effects",
    icon: "layers",
    color: "indigo",
    gradient: "from-indigo-500 to-violet-500",
    thumbnailUrl: "/thumbnails/categories/overlays.jpg",
    resources: [
      {
        id: "ov1",
        title: "Light Leaks Pack",
        description: "Professional light leak overlays",
        thumbnailUrl: "/thumbnails/overlays/light-leaks.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-light-leaks-pack-file-id/view?usp=sharing",
        category: "overlays",
        isPremium: true
      },
      {
        id: "ov2",
        title: "Film Grain Pack",
        description: "Vintage film grain overlays",
        thumbnailUrl: "/thumbnails/overlays/film-grain.jpg",
        downloadUrl: "https://drive.google.com/file/d/your-film-grain-pack-file-id/view?usp=sharing",
        category: "overlays",
        isPremium: true
      },
      // ... other overlay resources
    ]
  }
};

export const premiumResources = {
  proTemplates: {
    title: "Pro Video Templates",
    description: "Professional video templates for your next project",
    icon: "",
    gradient: "from-purple-500 to-pink-500",
    downloadUrl: "https://drive.google.com/file/d/your-pro-templates-file-id/view?usp=sharing",
  },
  soundEffects: {
    title: "Premium Sound Effects",
    description: "High-quality sound effects and music tracks",
    icon: "",
    gradient: "from-blue-500 to-purple-500",
    downloadUrl: "https://drive.google.com/file/d/your-premium-sound-effects-file-id/view?usp=sharing",
  },
  presets: {
    title: "Advanced Presets",
    description: "Professional presets for photo and video editing",
    icon: "",
    gradient: "from-amber-500 to-orange-500",
    downloadUrl: "https://drive.google.com/file/d/your-advanced-presets-file-id/view?usp=sharing",
  },
  fonts: {
    title: "Exclusive Fonts",
    description: "Premium typography and font collections",
    icon: "",
    gradient: "from-emerald-500 to-teal-500",
    downloadUrl: "https://drive.google.com/file/d/your-exclusive-fonts-file-id/view?usp=sharing",
  },
  motionGraphicsTemplates: {
    title: "Motion Graphics Templates",
    description: "Professional motion graphics templates",
    icon: "",
    gradient: "from-cyan-500 to-blue-500",
    downloadUrl: "https://drive.google.com/file/d/your-motion-graphics-templates-file-id/view?usp=sharing",
  },
  colorGradingLUTs: {
    title: "Color Grading LUTs",
    description: "Professional color grading LUTs",
    icon: "",
    gradient: "from-amber-500 to-orange-500",
    downloadUrl: "https://drive.google.com/file/d/your-color-grading-luts-file-id/view?usp=sharing",
  },
  videoOverlays: {
    title: "Video Overlays",
    description: "Professional video overlays",
    icon: "",
    gradient: "from-indigo-500 to-violet-500",
    downloadUrl: "https://drive.google.com/file/d/your-video-overlays-file-id/view?usp=sharing",
  },
};
