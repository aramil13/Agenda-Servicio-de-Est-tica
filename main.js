// Base de datos de productos Maria Nila
const MARIA_NILA_PRODUCTS = {
    // ==================== HEAD & HAIR HEAL (Cuero cabelludo sensible) ====================
    headHairHealShampoo: { name: "Head & Hair Heal Shampoo", desc: "Calma cuero cabelludo sensible con aloe vera y piroctona olamina.", img: "https://marianila.com/cdn/shop/files/13650-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-shampoo-350-ml", category: "scalp" },
    headHairHealConditioner: { name: "Head & Hair Heal Conditioner", desc: "Acondicionador calmante para el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/13651-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-conditioner-300-ml", category: "scalp" },
    headHairHealMasque: { name: "Head & Hair Heal Masque", desc: "Mascarilla calmante con aloe vera para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/13652-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-masque-250-ml", category: "scalp" },
    headHairHealSoothingSerum: { name: "Head & Hair Heal Serum", desc: "Serum calmante para el cuero cabelludo con aloe vera.", img: "https://marianila.com/cdn/shop/files/13653-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-soothing-serum-150-ml", category: "scalp" },
    headHairHealScalpScrub: { name: "Head & Hair Heal Scalp Scrub", desc: "Exfoliante fisico para cuero cabelludo sensible con sales marinas.", img: "https://marianila.com/cdn/shop/files/13655-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-scalp-scrub-200-ml", category: "scalp" },
    headHairHealScalpTonic: { name: "Head & Hair Heal Scalp Tonic", desc: "Tonico calmante para reducir irritacion y picazon del cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/13656-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-scalp-tonic-150-ml", category: "scalp" },
    headHairHealDuo: { name: "Head & Hair Heal Care Duo", desc: "Pack ahorro champu + acondicionador para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/13654-packshot.jpg", url: "https://marianila.com/products/care-duo-head-hair-heal", category: "scalp" },
    
    // ==================== TRUE SOFT (Cabello seco) ====================
    trueSoftShampoo: { name: "True Soft Shampoo", desc: "Hidratacion profunda con aceite de argan para cabello seco.", img: "https://marianila.com/cdn/shop/files/3630-packshot.jpg", url: "https://marianila.com/products/true-soft-shampoo-350-ml", category: "dry" },
    trueSoftConditioner: { name: "True Soft Conditioner", desc: "Acondicionador hidratante con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3631-packshot.jpg", url: "https://marianila.com/products/true-soft-conditioner-300-ml", category: "dry" },
    trueSoftMasque: { name: "True Soft Masque", desc: "Mascarilla nutritiva para cabello seco con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3632-packshot.jpg", url: "https://marianila.com/products/true-soft-masque-250-ml", category: "dry" },
    trueSoftArganOil: { name: "True Soft Argan Oil", desc: "Aceite de argan para hidratacion.", img: "https://marianila.com/cdn/shop/files/3637-packshot.jpg", url: "https://marianila.com/products/true-soft-argan-oil-100-ml", category: "dry" },
    trueSoftBoosterMasque: { name: "True Soft Booster Masque", desc: "Mascarilla intensiva para cabello muy seco.", img: "https://marianila.com/cdn/shop/files/3633-packshot.jpg", url: "https://marianila.com/products/true-soft-booster-masque-250-ml", category: "dry" },
    trueSoftLeaveInCream: { name: "True Soft Leave In Cream", desc: "Crema sin enjuague hidratante con aceite de argan para cabello seco.", img: "https://marianila.com/cdn/shop/files/3635-packshot.jpg", url: "https://marianila.com/products/true-soft-leave-in-cream-100-ml", category: "dry" },
    trueSoftHairPrimer: { name: "True Soft Hair Primer", desc: "Pre-shampoo hidratante que facilita el desenredado y protege.", img: "https://marianila.com/cdn/shop/files/3636-packshot.jpg", url: "https://marianila.com/products/true-soft-hair-primer-150-ml", category: "dry" },
    trueSoftDuo: { name: "True Soft Care Duo", desc: "Pack ahorro champu + acondicionador True Soft.", img: "https://marianila.com/cdn/shop/files/3634-packshot.jpg", url: "https://marianila.com/products/care-duo-true-soft", category: "dry" },
    
    // ==================== PURE VOLUME (Cabello fino) ====================
    pureVolumeShampoo: { name: "Pure Volume Shampoo", desc: "Voluminizador con provitamina B5 para cabello fino.", img: "https://marianila.com/cdn/shop/files/3610-packshot.jpg", url: "https://marianila.com/products/pure-volume-shampoo-350-ml", category: "fine" },
    pureVolumeConditioner: { name: "Pure Volume Conditioner", desc: "Acondicionador voluminizador ligero.", img: "https://marianila.com/cdn/shop/files/3611-packshot.jpg", url: "https://marianila.com/products/pure-volume-conditioner-300-ml", category: "fine" },
    pureVolumeMasque: { name: "Pure Volume Masque", desc: "Mascarilla voluminizadora con provitamina B5.", img: "https://marianila.com/cdn/shop/files/3612-packshot.jpg", url: "https://marianila.com/products/pure-volume-masque-250-ml", category: "fine" },
    pureVolumeMousse: { name: "Pure Volume Mousse", desc: "Espuma nutritiva y voluminizadora para cabello fino.", img: "https://marianila.com/cdn/shop/files/3613-packshot.jpg", url: "https://marianila.com/products/pure-volume-mousse-300-ml", category: "fine" },
    pureVolumeLeaveInCream: { name: "Pure Volume Leave In Cream", desc: "Crema ligera sin enjuague para dar cuerpo al cabello fino.", img: "https://marianila.com/cdn/shop/files/3614-packshot.jpg", url: "https://marianila.com/products/pure-volume-leave-in-cream-100-ml", category: "fine" },

    // ==================== LUMINOUS COLOUR (Cabello teñido) ====================
    luminousColourShampoo: { name: "Luminous Colour Shampoo", desc: "Preserva color con extracto de Granada.", img: "https://marianila.com/cdn/shop/files/3625-packshot.jpg", url: "https://marianila.com/products/luminous-colour-shampoo-350-ml", category: "colored" },
    luminousColourConditioner: { name: "Luminous Colour Conditioner", desc: "Acondicionador preservador de color.", img: "https://marianila.com/cdn/shop/files/3626-packshot.jpg", url: "https://marianila.com/products/luminous-colour-conditioner-300-ml", category: "colored" },
    luminousColourMasque: { name: "Luminous Colour Masque", desc: "Mascarilla protectora del color con extracto de granada.", img: "https://marianila.com/cdn/shop/files/3627-packshot.jpg", url: "https://marianila.com/products/luminous-colour-masque-250-ml", category: "colored" },
    luminousColourLeaveInCream: { name: "Luminous Colour Leave In Cream", desc: "Crema sin enjuague que sella el color y aporta brillo.", img: "https://marianila.com/cdn/shop/files/3628-packshot.jpg", url: "https://marianila.com/products/luminous-colour-leave-in-cream-100-ml", category: "colored" },
    luminousColourToneFinishSpray: { name: "Luminous Colour Tone Finish Spray", desc: "Spray fijador que mantiene el color vibrante y aporta brillo.", img: "https://marianila.com/cdn/shop/files/3629-packshot.jpg", url: "https://marianila.com/products/luminous-colour-tone-finish-spray-150-ml", category: "colored" },

    // ==================== PURIFYING CLEANSE (Cuero cabelludo graso) ====================
    purifyingCleanseShampoo: { name: "Purifying Cleanse Shampoo", desc: "Champu purificante para cuero cabelludo graso.", img: "https://marianila.com/cdn/shop/files/3615-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-shampoo-350-ml", category: "oily" },
    purifyingCleanseExfoliatingSerum: { name: "Purifying Cleansing Serum", desc: "Serum exfoliante detox para el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/3616-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-exfoliating-serum-150-ml", category: "oily" },
    purifyingCleanseDetoxMasque: { name: "Purifying Cleanse Detox Masque", desc: "Mascarilla detox purificante para cuero cabelludo graso.", img: "https://marianila.com/cdn/shop/files/3617-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-detox-masque-250-ml", category: "oily" },

    // ==================== STRUCTURE REPAIR (Cabello dañado) ====================
    structureRepairShampoo: { name: "Structure Repair Shampoo", desc: "Repara cabello dañado con keratina.", img: "https://marianila.com/cdn/shop/files/3600-packshot.jpg", url: "https://marianila.com/products/structure-repair-shampoo-350-ml", category: "damaged" },
    structureRepairConditioner: { name: "Structure Repair Conditioner", desc: "Acondicionador reparador con keratina.", img: "https://marianila.com/cdn/shop/files/3601-packshot.jpg", url: "https://marianila.com/products/structure-repair-conditioner-300-ml", category: "damaged" },
    structureRepairMasque: { name: "Structure Repair Masque", desc: "Mascarilla reparadora intensiva con keratina.", img: "https://marianila.com/cdn/shop/files/3602-packshot.jpg", url: "https://marianila.com/products/structure-repair-masque-250-ml", category: "damaged" },
    structureRepairLeaveInCream: { name: "Structure Repair Leave In Cream", desc: "Crema sin enjuague reparadora para cabello dañado.", img: "https://marianila.com/cdn/shop/files/3603-packshot.jpg", url: "https://marianila.com/products/structure-repair-leave-in-cream-100-ml", category: "damaged" },
    bondBuilder: { name: "Bond Builder", desc: "Reparador de enlaces capilares intensivo.", img: "https://marianila.com/cdn/shop/files/3604-packshot.jpg", url: "https://marianila.com/products/bond-builder-100-ml", category: "damaged" },
    structureRepairBondingBooster: { name: "Structure Repair Bonding Booster", desc: "Potenciador de union que refuerza enlaces capilares en tratamientos quimicos.", img: "https://marianila.com/cdn/shop/files/3605-packshot.jpg", url: "https://marianila.com/products/structure-repair-bonding-booster-100-ml", category: "damaged" },

    // ==================== SHEER SILVER (Cabello rubio/canoso) ====================
    sheerSilverShampoo: { name: "Sheer Silver Shampoo", desc: "Pigmentos violeta que neutralizan tonos dorados en rubios.", img: "https://marianila.com/cdn/shop/files/3640-packshot.jpg", url: "https://marianila.com/products/sheer-silver-shampoo-350-ml", category: "blonde" },
    sheerSilverConditioner: { name: "Sheer Silver Conditioner", desc: "Acondicionador con pigmentos violeta para rubios.", img: "https://marianila.com/cdn/shop/files/3641-packshot.jpg", url: "https://marianila.com/products/sheer-silver-conditioner-300-ml", category: "blonde" },
    sheerSilverMasque: { name: "Sheer Silver Masque", desc: "Mascarilla con pigmentos violeta para neutralizar tonos.", img: "https://marianila.com/cdn/shop/files/3642-packshot.jpg", url: "https://marianila.com/products/sheer-silver-masque-250-ml", category: "blonde" },
    sheerSilverBoosterMasque: { name: "Sheer Silver Booster Masque", desc: "Mascarilla intensiva con pigmentos violeta.", img: "https://marianila.com/cdn/shop/files/3643-packshot.jpg", url: "https://marianila.com/products/sheer-silver-booster-masque-250-ml", category: "blonde" },
    sheerSilverToneFixerSpray: { name: "Sheer Silver Tone Fixer Spray", desc: "Spray fijador con pigmentos violeta para neutralizar tonos amarillos entre lavados.", img: "https://marianila.com/cdn/shop/files/3645-packshot.jpg", url: "https://marianila.com/products/sheer-silver-tone-fixer-spray-150-ml", category: "blonde" },
    sheerSilverDuo: { name: "Sheer Silver Shampoo + Conditioner Duo", desc: "Pack champu y acondicionador con pigmentos violeta para rubios.", img: "https://marianila.com/cdn/shop/files/3644-packshot.jpg", url: "https://marianila.com/products/sheer-silver-shampoo-conditioner-duo", category: "blonde" },
    
    // ==================== COLOUR REFRESH (Máscaras de color) ====================
    colourRefreshAutumnRed: { name: "Colour Refresh Autumn Red", desc: "Mascara de color rojo intenso con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3650-packshot.jpg", url: "https://marianila.com/products/colour-refresh-autumn-red-100-ml", category: "color-mask" },
    colourRefreshCacao: { name: "Colour Refresh Cacao", desc: "Mascara de color marron oscuro con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3651-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cacao-100-ml", category: "color-mask" },
    colourRefreshCacaoIntense: { name: "Colour Refresh Cacao Intense", desc: "Mascara de color marron muy oscuro.", img: "https://marianila.com/cdn/shop/files/3652-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cacao-intense-100-ml", category: "color-mask" },
    colourRefreshPearlSilver: { name: "Colour Refresh Pearl Silver", desc: "Mascara de color plata con pigmentos violeta.", img: "https://marianila.com/cdn/shop/files/3653-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pearl-silver-100-ml", category: "color-mask" },
    colourRefreshBrightCopper: { name: "Colour Refresh Bright Copper", desc: "Mascara de color cobre brillante.", img: "https://marianila.com/cdn/shop/files/3666-packshot.jpg", url: "https://marianila.com/products/colour-refresh-bright-copper-300-ml", category: "color-mask" },
    colourRefreshBrightRed: { name: "Colour Refresh Bright Red", desc: "Mascara de color rojo brillante intenso.", img: "https://marianila.com/cdn/shop/files/3655-packshot.jpg", url: "https://marianila.com/products/colour-refresh-bright-red-100-ml", category: "color-mask" },
    colourRefreshCoolCream: { name: "Colour Refresh Cool Cream", desc: "Mascara de color beige frio para rubios.", img: "https://marianila.com/cdn/shop/files/3656-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cool-cream-100-ml", category: "color-mask" },
    colourRefreshPinkPeach: { name: "Colour Refresh Pink Peach", desc: "Mascara de color rosa melocoton.", img: "https://marianila.com/cdn/shop/files/3657-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pink-peach-100-ml", category: "color-mask" },
    colourRefreshLavender: { name: "Colour Refresh Lavender", desc: "Mascara de color lavanda suave.", img: "https://marianila.com/cdn/shop/files/3658-packshot.jpg", url: "https://marianila.com/products/colour-refresh-lavender-100-ml", category: "color-mask" },
    colourRefreshBeigeBlonde: { name: "Colour Refresh Beige Blonde", desc: "Mascara de color rubio beige.", img: "https://marianila.com/cdn/shop/files/3659-packshot.jpg", url: "https://marianila.com/products/colour-refresh-beige-blonde-100-ml", category: "color-mask" },
    colourRefreshCaramelBrown: { name: "Colour Refresh Caramel Brown", desc: "Mascara de color marron caramelo.", img: "https://marianila.com/cdn/shop/files/3660-packshot.jpg", url: "https://marianila.com/products/colour-refresh-caramel-brown-100-ml", category: "color-mask" },
    colourRefreshPearlRose: { name: "Colour Refresh Pearl Rose", desc: "Mascara de color rosa perla.", img: "https://marianila.com/cdn/shop/files/3661-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pearl-rose-100-ml", category: "color-mask" },
    colourRefreshWhiteMix: { name: "Colour Refresh White Mix", desc: "Base blanca para diluir y crear tonos pastel.", img: "https://marianila.com/cdn/shop/files/3662-packshot.jpg", url: "https://marianila.com/products/colour-refresh-white-mix-100-ml", category: "color-mask" },
    colourRefreshHoneyBlonde: { name: "Colour Refresh Honey Blonde", desc: "Mascara de color rubio miel.", img: "https://marianila.com/cdn/shop/files/3663-packshot.jpg", url: "https://marianila.com/products/colour-refresh-honey-blonde-100-ml", category: "color-mask" },
    colourRefreshBlack: { name: "Colour Refresh Black", desc: "Mascara de color negro intenso.", img: "https://marianila.com/cdn/shop/files/3664-packshot.jpg", url: "https://marianila.com/products/colour-refresh-black-100-ml", category: "color-mask" },
    colourRefreshVividViolet: { name: "Colour Refresh Vivid Violet", desc: "Mascara de color violeta vivo.", img: "https://marianila.com/cdn/shop/files/3665-packshot.jpg", url: "https://marianila.com/products/colour-refresh-vivid-violet-100-ml", category: "color-mask" },

    // ==================== COILS & CURLS (Cabello rizado) ====================
    coilsCurlsCoWash: { name: "Coils & Curls Co-Wash", desc: "Limpieza suave sin sulfatos para rizos.", img: "https://marianila.com/cdn/shop/files/3670-packshot.jpg", url: "https://marianila.com/products/coils-curls-co-wash", category: "curly" },
    coilsCurlsOilInCream: { name: "Coils & Curls Oil In Cream", desc: "Crema leave-in definidora de rizos con manteca de karite.", img: "https://marianila.com/cdn/shop/files/3671-packshot.jpg", url: "https://marianila.com/products/coils-curls-oil-in-cream", category: "curly" },
    coilsCurlsFinishingTreatmentMasque: { name: "Coils & Curls Finishing Masque", desc: "Mascarilla nutritiva para definir y suavizar rizos.", img: "https://marianila.com/cdn/shop/files/3672-packshot.jpg", url: "https://marianila.com/products/coils-curls-finishing-treatment-masque", category: "curly" },
    coilsCurlsWeightlessCurlDefiner: { name: "Weightless Curl Definer", desc: "Gel definidor de rizos sin peso con aloe vera.", img: "https://marianila.com/cdn/shop/files/3673-packshot.jpg", url: "https://marianila.com/products/coils-curls-weightless-curl-definer", category: "curly" },
    coilsCurlsLusciousCurlDefiner: { name: "Luscious Curl Definer", desc: "Gel rico que define rizos con medio agarre.", img: "https://marianila.com/cdn/shop/files/3674-packshot.jpg", url: "https://marianila.com/products/coils-curls-luscious-curl-definer", category: "curly" },
    coilsCurlsPrimer: { name: "Coils & Curls Primer", desc: "Pre-shampoo y acondicionador sin enjuague para rizos definidos.", img: "https://marianila.com/cdn/shop/files/3675-packshot.jpg", url: "https://marianila.com/products/coils-curls-primer", category: "curly" },
    coilsCurlsCurlCream: { name: "Coils & Curls Curl Cream", desc: "Crema definidora de rizos con medio agarre y brillo.", img: "https://marianila.com/cdn/shop/files/3676-packshot.jpg", url: "https://marianila.com/products/coils-curls-curl-cream", category: "curly" },

    // ==================== STYLING (Productos para peinar) ====================
    oceanSpray: { name: "Ocean Spray", desc: "Spray de agua salada con extra agarre para beach waves.", img: "https://marianila.com/cdn/shop/files/3680-packshot.jpg", url: "https://marianila.com/products/ocean-spray-150-ml", category: "styling" },
    saltyMist: { name: "Salty Mist", desc: "Bruma salina ligera para textura natural.", img: "https://marianila.com/cdn/shop/files/3681-packshot.jpg", url: "https://marianila.com/products/salty-mist-150-ml", category: "styling" },
    stylingMousse: { name: "Styling Mousse", desc: "Espuma de peinado con agarre flexible.", img: "https://marianila.com/cdn/shop/files/3682-packshot.jpg", url: "https://marianila.com/products/styling-mousse-300-ml", category: "styling" },
    stylingSpray: { name: "Styling Spray", desc: "Spray de peinado con agarre ligero.", img: "https://marianila.com/cdn/shop/files/3683-packshot.jpg", url: "https://marianila.com/products/styling-spray-300-ml", category: "styling" },
    finishingSpray: { name: "Finishing Spray", desc: "Laca de fijacion fuerte y brillo.", img: "https://marianila.com/cdn/shop/files/3684-packshot.jpg", url: "https://marianila.com/products/finishing-spray-300-ml", category: "styling" },
    shapingHeatSpray: { name: "Shaping Heat Spray", desc: "Protector termico para plancha y secador.", img: "https://marianila.com/cdn/shop/files/3685-packshot.jpg", url: "https://marianila.com/products/shaping-heat-spray-150-ml", category: "styling" },
    creamHeatSpray: { name: "Cream Heat Spray", desc: "Protector termico en crema para peinado.", img: "https://marianila.com/cdn/shop/files/3686-packshot.jpg", url: "https://marianila.com/products/cream-heat-spray-150-ml", category: "styling" },
    quickDryHeatSpray: { name: "Quick Dry Heat Spray", desc: "Protector termico de secado rapido.", img: "https://marianila.com/cdn/shop/files/3687-packshot.jpg", url: "https://marianila.com/products/quick-dry-heat-spray-150-ml", category: "styling" },
    glossCoat: { name: "Gloss Coat", desc: "Spray alisador termoactivado para brillo.", img: "https://marianila.com/cdn/shop/files/3688-packshot.jpg", url: "https://marianila.com/products/gloss-coat-200-ml", category: "styling" },
    stylingCream: { name: "Styling Cream", desc: "Crema moldeadora flexible para definicion.", img: "https://marianila.com/cdn/shop/files/3689-packshot.jpg", url: "https://marianila.com/products/styling-cream-100-ml", category: "styling" },
    volumeSpray: { name: "Volume Spray", desc: "Spray voluminizador ligero para raiz.", img: "https://marianila.com/cdn/shop/files/3690-packshot.jpg", url: "https://marianila.com/products/volume-spray-100-ml", category: "styling" },
    powerPowder: { name: "Power Powder", desc: "Polvo texturizador para volumen extra en raiz.", img: "https://marianila.com/cdn/shop/files/3691-packshot.jpg", url: "https://marianila.com/products/power-powder-20-g", category: "styling" },
    cleansingPowder: { name: "Cleansing Powder", desc: "Polvo limpiador para peinar y texturizar.", img: "https://marianila.com/cdn/shop/files/3692-packshot.jpg", url: "https://marianila.com/products/cleansing-powder-60-g", category: "styling" },
    sprayWax: { name: "Spray Wax", desc: "Cera en aerosol para textura y definicion.", img: "https://marianila.com/cdn/shop/files/3693-packshot.jpg", url: "https://marianila.com/products/spray-wax-200-ml", category: "styling" },
    stylingPaste: { name: "Styling Paste", desc: "Pasta moldeadora flexible con mate.", img: "https://marianila.com/cdn/shop/files/3694-packshot.jpg", url: "https://marianila.com/products/styling-paste-100-ml", category: "styling" },
    extremeWax: { name: "Extreme Wax", desc: "Cera de fijacion extrema y brillo medio.", img: "https://marianila.com/cdn/shop/files/3695-packshot.jpg", url: "https://marianila.com/products/extreme-wax-100-ml", category: "styling" },
    fixatingWax: { name: "Fixating Wax", desc: "Cera fijadora de acabado mate.", img: "https://marianila.com/cdn/shop/files/3696-packshot.jpg", url: "https://marianila.com/products/fixating-wax-100-ml", category: "styling" },
    veganSculptingWax: { name: "Vegan Sculpting Wax", desc: "Cera moldeadora vegana para estilismo.", img: "https://marianila.com/cdn/shop/files/3697-packshot.jpg", url: "https://marianila.com/products/vegan-sculpting-wax-100-ml", category: "styling" },
    dryShampoo: { name: "Dry Shampoo", desc: "Champu seco refrescante para lavados entre lavados.", img: "https://marianila.com/cdn/shop/files/3698-packshot.jpg", url: "https://marianila.com/products/dry-shampoo-250-ml", category: "styling" },
    soothingDryShampoo: { name: "Soothing Dry Shampoo", desc: "Champu seco calmante para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/3699-packshot.jpg", url: "https://marianila.com/products/soothing-dry-shampoo-250-ml", category: "styling" },
    hairPrimer: { name: "Hair Primer", desc: "Pre-shampoo protector que facilita el desenredado y protege del calor.", img: "https://marianila.com/cdn/shop/files/3702-packshot.jpg", url: "https://marianila.com/products/hair-primer-150-ml", category: "styling" },
    shineCream: { name: "Shine Cream", desc: "Crema brillante para aportar luz y suavidad sin peso.", img: "https://marianila.com/cdn/shop/files/3703-packshot.jpg", url: "https://marianila.com/products/shine-cream-100-ml", category: "styling" },
    textureCream: { name: "Texture Cream", desc: "Crema texturizadora para definicion y separacion de mechas.", img: "https://marianila.com/cdn/shop/files/3704-packshot.jpg", url: "https://marianila.com/products/texture-cream-100-ml", category: "styling" },

    // ==================== OTROS ====================
    healingCicaOil: { name: "Healing Cica Oil", desc: "Aceite reparador con Cica para barrera cutanea.", img: "https://marianila.com/cdn/shop/files/3700-packshot.jpg", url: "https://marianila.com/products/healing-cica-oil-100-ml", category: "treatment" },
    floralDriftHairMist: { name: "Floral Drift Hair Mist", desc: "Bruma capilar floral con fragancia suave.", img: "https://marianila.com/cdn/shop/files/3701-packshot.jpg", url: "https://marianila.com/products/floral-drift-fine-fragrance-hair-mist-100-ml", category: "treatment" },
    hairButter: { name: "Hair Butter", desc: "Manteca nutritiva intensiva con manteca de karite para cabello muy seco.", img: "https://marianila.com/cdn/shop/files/3705-packshot.jpg", url: "https://marianila.com/products/hair-butter-100-ml", category: "treatment" },
    scalpTreatment: { name: "Scalp Treatment", desc: "Tratamiento intensivo para equilibrar y calmar el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/3706-packshot.jpg", url: "https://marianila.com/products/scalp-treatment-100-ml", category: "treatment" }
};

// Tratamiento Premium Olaplex del Salón
const OLAPLEX_TREATMENTS = {
    treatmentPremium: { 
        name: "Tratamiento Premium Olaplex", 
        desc: "Régenera puentes de disulfuro. Protocolo: 1) Broad Spectrum Chelating (3 min) - elimina minerales. 2) Olaplex N°1 (5 min) - recupera enlaces. 3) Olaplex N°2 (3 min) - sella enlaces. 4) Champú N°4 (1 min). 5) Mascarilla N°5 (3 min - encapsulado sin oxígeno).",
    },
    treatmentExpress: { 
        name: "Tratamiento Olaplex Express", 
        desc: "Tratamiento 3 veces más fuerte, 3 veces más suave, 3 veces más elástico en 3 min. Paso 1: Prechampu. Paso 2: Olaplex N°3 Plus aplicado con las manos de raíces a puntas.",
    }
};

function getMariaNilaRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, sebum, isColored, isBlonde, isCurly, isDamaged } = diagnosis;
    
    // Cabello seco (hidratación baja)
    if (hydration < 50) {
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftArganOil);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftLeaveInCream);
    }
    
    // Cabello fino (densidad baja)
    if (density < 150) {
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeMousse);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeLeaveInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.volumeSpray);
    }
    
    // Cuero cabelludo graso
    if (sebum > 65 || sebum === 'Alto') {
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseExfoliatingSerum);
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseDetoxMasque);
    }
    
    // Cabello teñido
    if (isColored) {
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourLeaveInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshCacao);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshHoneyBlonde);
    }
    
    // Rubios / Canas
    if (isBlonde) {
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverToneFixerSpray);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshPearlSilver);
    }
    
    // Cabello rizado
    if (isCurly) {
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsCoWash);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsOilInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsFinishingTreatmentMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsWeightlessCurlDefiner);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsCurlCream);
    }
    
    // Cabello dañado
    if (isDamaged || thickness < 65) {
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.bondBuilder);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairBondingBooster);
    }
    
    // Cuero cabelludo sensible
    if (hydration < 40 || sebum < 30) {
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealSoothingSerum);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealScalpTonic);
    }
    
    // Protectores térmicos (siempre útiles)
    recommendations.push(MARIA_NILA_PRODUCTS.shapingHeatSpray);
    recommendations.push(MARIA_NILA_PRODUCTS.creamHeatSpray);
    
    // Styling para textura
    recommendations.push(MARIA_NILA_PRODUCTS.oceanSpray);
    recommendations.push(MARIA_NILA_PRODUCTS.stylingMousse);
    recommendations.push(MARIA_NILA_PRODUCTS.textureCream);
    
    // Eliminar duplicados por nombre
    const seen = new Set();
    const unique = recommendations.filter(p => {
        if (!p || seen.has(p.name)) return false;
        seen.add(p.name);
        return true;
    });
    
    return unique.slice(0, 12);
}

function getOlaplexRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, isColored } = diagnosis;
    
    // Tratamiento Premium para casos severos
    if (density < 130 || thickness < 60 || hydration < 45) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentPremium);
    }
    // Tratamiento Express - siempre mostrar si hay menos de 2
    if (recommendations.length < 2) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentExpress);
    }
    return recommendations.slice(0, 2);
}

function displayDiagnosisProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container || !products || !Array.isArray(products)) return;
    
    let html = '';
    for (const p of products) {
        if (!p) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;">';
        html += '<img src="' + p.img + '" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:8px;background:white;" onerror="this.style.display=\'none\'">';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + p.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + p.desc + '</p>';
        html += '<a href="' + p.url + '" target="_blank" style="color:#a78bfa;">Ver producto →</a></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

function displayDiagnosisTreatments(treatments) {
    const container = document.getElementById('treatments-grid');
    if (!container || !treatments || !Array.isArray(treatments)) return;
    
    let html = '';
    for (const t of treatments) {
        if (!t) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;border-left:3px solid #10b981;">';
        html += '<div style="font-size:1.5rem;">💊</div>';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + t.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + (t.desc || '') + '</p></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- Nymara App: Diagnóstico Capilar Integrado ---');

    // One-time migration: remove old saved admin email so field starts empty
    if (!localStorage.getItem('nymara_migrated_admin_email')) {
        localStorage.removeItem('nymara_admin_email');
        localStorage.setItem('nymara_migrated_admin_email', '1');
    }

    /* ═══════════════════════════════════════
       SUPABASE CLIENT
       ═══════════════════════════════════════ */
    const SUPABASE_URL = 'https://wqbrappajbrzanpymwtx.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_rxdHNZAUSQw-C8-BvzX4rA_9qH6GeL9';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: false
        }
    });

    /* ═══════════════════════════════════════
       GLOBAL EVENT DELEGATION
       (Attached only once to document)
       ═══════════════════════════════════════ */
    document.addEventListener('click', async e => {
        // 1. Generic Delete Buttons (.delete-btn) - Clients, Services, Salons, Appointments
        const delBtn = e.target.closest('.delete-btn');
        if (delBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (delBtn.dataset.confirming === 'true') {
                const id = delBtn.dataset.id;
                const type = delBtn.dataset.type;
                delBtn.disabled = true;
                
                if (type === 'client') {
                    if (State.session?.staff && !isStaffClient(id)) {
                        showToast('No tienes permiso para eliminar este cliente', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteClient(id)) renderRoute();
                } else if (type === 'service') {
                    if (State.session?.staff && !isStaffService(id)) {
                        showToast('No tienes permiso para eliminar este servicio', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteService(id)) renderRoute();
                } else if (type === 'salon') {
                    if (await deleteSalon(id)) renderRoute();
                } else {
                    if (State.session?.staff && !isStaffAppointment(id)) {
                        showToast('No tienes permiso para eliminar esta cita', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteAppointment(id)) renderRoute();
                }
            } else {
                delBtn.dataset.confirming = 'true';
                const originalHtml = delBtn.innerHTML;
                delBtn.innerHTML = '<span style="font-size:0.7rem">¿Borrar?</span>';
                delBtn.style.background = '#e67e22';
                delBtn.style.width = 'auto';
                delBtn.style.padding = '0 6px';
                
                setTimeout(() => {
                    if (delBtn && delBtn.dataset.confirming === 'true') {
                        delBtn.dataset.confirming = 'false';
                        delBtn.innerHTML = originalHtml;
                        delBtn.style.background = '';
                        delBtn.style.width = '';
                        delBtn.style.padding = '';
                    }
                }, 3000);
            }
            return;
        }

        // 2. Appointment Photo Delete
        const aptDelBtn = e.target.closest('.apt-photo-delete-btn');
        if (aptDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (aptDelBtn.dataset.confirming === 'true') {
                const photoId = aptDelBtn.dataset.photoId;
                const aptItem = aptDelBtn.closest('.apt-mini-photo');
                const aptId = aptItem?.dataset.aptId;
                
                if (aptId && photoId) {
                    const apt = State.appointments.find(a => a.id === aptId);
                    if (apt && apt.appointmentPhotos) {
                        const photoToDelete = apt.appointmentPhotos.find(p => p.id === photoId);
                        apt.appointmentPhotos = apt.appointmentPhotos.filter(p => p.id !== photoId);
                        await supabase.from('appointments').update({ appointment_photos: apt.appointmentPhotos }).eq('id', aptId);
                        
                        if (photoToDelete && photoToDelete.clientPhotoId) {
                            await deleteClientPhoto(photoToDelete.clientPhotoId);
                        }
                        showToast('Foto eliminada');
                        renderRoute();
                    }
                }
            } else {
                aptDelBtn.dataset.confirming = 'true';
                aptDelBtn.textContent = '¿X?';
                aptDelBtn.style.background = '#e67e22';
                setTimeout(() => {
                    if (aptDelBtn && aptDelBtn.dataset.confirming === 'true') {
                        aptDelBtn.dataset.confirming = 'false';
                        aptDelBtn.textContent = '🗑️';
                        aptDelBtn.style.background = 'rgba(0,0,0,0.6)';
                    }
                }, 3000);
            }
            return;
        }

        // 3. Appointment Photo Edit
        const aptEditBtn = e.target.closest('.apt-photo-edit-btn');
        if (aptEditBtn) {
            e.stopPropagation();
            const photoId = aptEditBtn.dataset.photoId;
            const aptItem = aptEditBtn.closest('.apt-mini-photo');
            const aptId = aptItem?.dataset.aptId;
            const apt = State.appointments.find(a => a.id === aptId);
            const photo = apt?.appointmentPhotos?.find(p => p.id === photoId);
            if (photo && aptId) {
                window.editAptPhoto(photoId, aptId, photo.photo_date || '', photo.notes || '', photo.photo_type || 'before');
            }
            return;
        }

        // 4. Client Photo Delete
        const clientDelBtn = e.target.closest('.client-photo-remove-btn');
        if (clientDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (clientDelBtn.dataset.confirming === 'true') {
                const photoId = clientDelBtn.dataset.id;
                clientDelBtn.disabled = true;
                clientDelBtn.textContent = '...';
                
                const success = await deleteClientPhoto(photoId);
                if (success) {
                    renderRoute(); 
                    if (typeof window.refreshCurrentClientPhotos === 'function') {
                        window.refreshCurrentClientPhotos();
                    }
                } else {
                    clientDelBtn.disabled = false;
                    clientDelBtn.dataset.confirming = 'false';
                    clientDelBtn.textContent = '🗑️';
                    clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                }
            } else {
                clientDelBtn.dataset.confirming = 'true';
                clientDelBtn.textContent = '¿Borrar?';
                clientDelBtn.style.background = '#e67e22';
                clientDelBtn.style.width = 'auto';
                
                setTimeout(() => {
                    if (clientDelBtn && clientDelBtn.dataset.confirming === 'true') {
                        clientDelBtn.dataset.confirming = 'false';
                        clientDelBtn.textContent = '🗑️';
                        clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                    }
                }, 3000);
            }
            return;
        }

        // 5. Client Photo Edit
        const clientEditBtn = e.target.closest('.client-photo-edit-btn');
        if (clientEditBtn) {
            e.stopPropagation();
            const photoId = clientEditBtn.dataset.photoId;
            const cid = window.currentModalClientId;
            if (photoId) window.editClientPhoto(photoId, cid, '', '', '');
            return;
        }

        // 6. Logout Buttons (Two-step)
        const logoutTarget = e.target.closest('#btn-logout') || e.target.closest('.user-profile');
        if (logoutTarget) {
            e.preventDefault();
            e.stopPropagation();
            if (logoutTarget.dataset.confirming === 'true') {
                logoutTarget.disabled = true;
                logoutTarget.innerHTML = '<span>Saliendo...</span>';
                await supabase.auth.signOut();
                State.clients = [];
                State.services = [];
                State.appointments = [];
            } else {
                logoutTarget.dataset.confirming = 'true';
                const originalHtml = logoutTarget.innerHTML;
                if (logoutTarget.id === 'btn-logout') {
                    logoutTarget.innerHTML = '<span>¿Salir?</span>';
                    logoutTarget.style.width = 'auto';
                    logoutTarget.style.padding = '0 8px';
                } else {
                    const emailSpan = logoutTarget.querySelector('.user-email');
                    if (emailSpan) emailSpan.textContent = '¿Cerrar sesión?';
                }
                
                setTimeout(() => {
                    if (logoutTarget.dataset.confirming === 'true') {
                        logoutTarget.dataset.confirming = 'false';
                        logoutTarget.innerHTML = originalHtml;
                        if (logoutTarget.id === 'btn-logout') {
                            logoutTarget.style.width = '';
                            logoutTarget.style.padding = '';
                        } else {
                            const emailSpan = logoutTarget.querySelector('.user-email');
                            if (emailSpan) emailSpan.textContent = State.currentUserEmail;
                        }
                    }
                }, 3000);
            }
            return;
        }
    });

    /* ═══════════════════════════════════════
       STATE
       ═══════════════════════════════════════ */
    const State = {
        clients: [],
        services: [],
        appointments: [],
        salons: [],
        clientPhotos: {},
        // Calendar state
        calYear: new Date().getFullYear(),
        calMonth: new Date().getMonth(),
        selectedDate: null,
        selectedSalonId: null,
        isLoading: false,
        // Daily listing state
        dailyDate: (() => { const d = new Date(); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; })(),
        activeSalonId: localStorage.getItem('nymara_agenda_salon') || 'all',
        // Auth state
        session: null,
        currentUserEmail: null,
        currentUserColor: null,
        // Settings
        settings: {
            startTime: localStorage.getItem('nymara_start_time') || '09:00',
            endTime: localStorage.getItem('nymara_end_time') || '20:00'
        }
    };

    /* ═══════════════════════════════════════
       DOM REFERENCES
       ═══════════════════════════════════════ */
    const appContent = document.getElementById('app-content');
    const navItems = document.querySelectorAll('.nav-item');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalTitle = document.getElementById('modal-title');

    // Auth DOM
    const authScreen = document.getElementById('auth-screen');
    const appLayout = document.getElementById('app-layout');
    const authLoginForm = document.getElementById('auth-login-form');
    const authSubmitText = document.getElementById('auth-submit-text');
    const authSpinner = document.getElementById('auth-spinner');
    const authError = document.getElementById('auth-error');
    const userEmailEl = document.getElementById('user-email');
    const userAvatarEl = document.getElementById('user-avatar');
    const userProfileEl = document.querySelector('.user-profile');
    const btnLogout = document.getElementById('btn-logout');
    const authTabAdmin = document.getElementById('auth-tab-admin');
    const authTabStaff = document.getElementById('auth-tab-staff');
    const authAdminFields = document.getElementById('auth-admin-fields');
    const authStaffFields = document.getElementById('auth-staff-fields');
    const authFormTitle = document.getElementById('auth-form-title');
    const authFormSubtitle = document.getElementById('auth-form-subtitle');



    let authMode = 'admin';
    let staffName = null;

    function getStaffAptIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_apt_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffAptId(id) {
        const ids = getStaffAptIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_apt_ids', JSON.stringify(ids)); }
    }

    function isStaffAppointment(aptId) {
        return getStaffAptIds().includes(aptId);
    }

    function getStaffClientIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_client_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffClientId(id) {
        const ids = getStaffClientIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_client_ids', JSON.stringify(ids)); }
    }

    function isStaffClient(id) {
        return getStaffClientIds().includes(id);
    }

    function getStaffServiceIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_service_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffServiceId(id) {
        const ids = getStaffServiceIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_service_ids', JSON.stringify(ids)); }
    }

    function isStaffService(id) {
        return getStaffServiceIds().includes(id);
    }

    function getStaffAccounts() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_accounts') || '[]'); }
        catch { return []; }
    }

    function saveStaffAccount(account) {
        const accounts = getStaffAccounts();
        const idx = accounts.findIndex(a => a.id === account.id);
        if (idx >= 0) accounts[idx] = account;
        else accounts.push(account);
        localStorage.setItem('nymara_staff_accounts', JSON.stringify(accounts));
    }

    function deleteStaffAccount(id) {
        const accounts = getStaffAccounts().filter(a => a.id !== id);
        localStorage.setItem('nymara_staff_accounts', JSON.stringify(accounts));
    }

    /* ═══════════════════════════════════════
       HELPERS
       ═══════════════════════════════════════ */
    const USER_COLORS = [
        '#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#f39c12',
        '#1abc9c', '#e67e22', '#e91e63', '#00bcd4', '#8bc34a',
        '#ff5722', '#795548', '#607d8b', '#673ab7', '#ff6b6b'
    ];

    function getUserColor(email) {
        if (!email) return USER_COLORS[0];
        let hash = 0;
        for (let i = 0; i < email.length; i++) {
            hash = email.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % USER_COLORS.length;
        return USER_COLORS[index];
    }

    function applyUserColor(email) {
        if (!userAvatarEl) return;
        const color = getUserColor(email);
        console.log('User color:', email, '->', color);
        userAvatarEl.style.background = color;
        if (userEmailEl) userEmailEl.style.color = color;
    }

    const generateId = () => {
        if (crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    /** Returns 'YYYY-MM-DD' in local time */
    function toLocalDateStr(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    const WEEKDAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const MONTH_NAMES = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const DEFAULT_WA_TEMPLATE = 'Hola {cliente}, desde Estética y Bienestar Lara, en colaboración con {salon}, te recordamos tu cita para el día {fecha} a las {hora}. Si necesitas cambiar o anular su cita por favor hágamelo saber. Para confirmarla agradecería un OK. Gracias y te esperamos';

    /** Helper to send specialized WhatsApp messages */
    function sendWASMessage(phone, name, date = null, time = null, template = null, salonName = '', serviceName = '') {
        if (!phone) {
            showToast('El cliente no tiene un teléfono configurado.', 'error');
            return;
        }
        
        const cleanPhone = phone.replace(/\D/g, '');
        let msg = '';
        
        if (template) {
            const dateObj = date ? new Date(date + 'T00:00:00') : null;
            const dateLabel = dateObj ? dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }) : '';
            msg = template
                .replace(/{cliente}/g, name)
                .replace(/{salon}/g, salonName)
                .replace(/{servicio}/g, serviceName)
                .replace(/{fecha}/g, dateLabel)
                .replace(/{hora}/g, time || '');
        } else if (date && time) {
            const dateObj = new Date(date + 'T00:00:00');
            const dateLabel = dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
            msg = `Hola ${name} tienes una cita con Nymara Estilistas, el ${dateLabel}, a las ${time}`;
        } else {
            msg = `Hola ${name}, me pongo en contacto contigo desde Nymara Estilistas.`;
        }
        
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
    }

    window.insertWAVariable = function(variable) {
        const ta = document.getElementById('wa-template-textarea');
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const text = ta.value;
        ta.value = text.substring(0, start) + variable + text.substring(end);
        ta.selectionStart = ta.selectionEnd = start + variable.length;
        ta.focus();
    }

    function toggleWATemplate() {
        const select = document.getElementById('enviar-was-select');
        const group = document.getElementById('wa-template-group');
        if (select && group) {
            group.style.display = select.value === 'true' ? '' : 'none';
        }
    }

    /* ═══════════════════════════════════════
       TOAST NOTIFICATIONS
       ═══════════════════════════════════════ */
    function showToast(message, type = 'success') {
        // Remove existing toast
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /* ═══════════════════════════════════════
       SUPABASE DATA OPERATIONS
       ═══════════════════════════════════════ */

    /** Loads all data from Supabase into our local State cache */
    async function loadAllData() {
        State.isLoading = true;
        renderRoute();

        try {
            const [clientsRes, servicesRes, appointmentsRes, salonsRes] = await Promise.all([
                supabase.from('clients').select('*').order('name'),
                supabase.from('services').select('*').order('name'),
                supabase.from('appointments').select('*').order('date').order('time'),
                supabase.from('salons').select('*').or(`user_email.eq.${State.currentUserEmail},user_email.is.null`).order('name')
            ]);

            if (clientsRes.error) throw clientsRes.error;
            if (servicesRes.error) throw servicesRes.error;
            if (appointmentsRes.error) throw appointmentsRes.error;
            if (salonsRes.error) {
                console.warn('Tabla salons no existe aún:', salonsRes.error.message);
                State.salons = [];
            } else {
                State.salons = salonsRes.data;
            }

            // Validar que activeSalonId siga siendo un salón existente
            if (State.activeSalonId !== 'all' && !State.salons.some(s => s.id === State.activeSalonId)) {
                State.activeSalonId = 'all';
                localStorage.setItem('nymara_agenda_salon', 'all');
            }

            State.clients = clientsRes.data;
            State.services = servicesRes.data;
            // Map DB snake_case to JS camelCase for appointments
            State.appointments = appointmentsRes.data.map(a => ({
                id: a.id,
                clientId: a.client_id,
                serviceId: a.service_id,
                salonId: a.salon_id || null,
                date: a.date,
                time: a.time.substring(0, 5), // "HH:MM:SS" → "HH:MM"
                notes: a.notes || '',
                whatsappSent: a.whatsapp_sent || false,
                userEmail: a.user_email || '',
                appointmentPhotos: a.appointment_photos || [],
                isStaffAppointment: a.is_staff_appointment || false,
            }));
            
            // Cargar todas las fotos de clientes
            await loadAllClientPhotos();

            } catch (err) {
            console.error('Error loading data from Supabase:', err);
            showToast('Error al cargar datos: ' + (err.message || err), 'error');
        } finally {
            State.isLoading = false;
            renderRoute();
            
            // Verificación post-carga: ¿Hay recordatorios para los próximos 3 días?
            if (State.session) {
                const today = new Date();
                const futureLimit = new Date(today);
                futureLimit.setDate(today.getDate() + 3);
                
                const limitStr = toLocalDateStr(futureLimit);
                const todayStr = toLocalDateStr(today);
                
                const count = State.appointments.filter(apt => {
                    if (apt.date < todayStr || apt.date > limitStr) return false;
                    if (apt.whatsappSent) return false; // Solo pendientes
                    const client = State.clients.find(c => c.id === apt.clientId);
                    return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
                }).length;
                
                if (count > 0) {
                    showToast(`Tienes ${count} recordatorio${count !== 1 ? 's' : ''} WhatsApp pendiente${count !== 1 ? 's' : ''} para los próximos días.`, 'info');
                }
            }
        }
    }

    /* ═══════════════════════════════════════
       AUTHENTICATION LOGIC
       ═══════════════════════════════════════ */

    // Check existing session
    async function checkSession() {
        // Check for staff session first
        const staffEmail = localStorage.getItem('nymara_staff_session_email');
        const staffNameVal = localStorage.getItem('nymara_staff_name');
        const staffSalonId = localStorage.getItem('nymara_staff_salon_id');
        if (staffEmail && staffNameVal && staffSalonId) {
            const accounts = getStaffAccounts();
            const account = accounts.find(a => a.name === staffNameVal && a.salonId === staffSalonId);
            if (account) {
                handleStaffSession(account);
                return;
            }
        }

        // Listen for auth changes
        supabase.auth.onAuthStateChange(async (event, newSession) => {
            handleSessionUpdate(newSession);
        });

        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error checking session:', error);
            handleSessionUpdate(null);
            return;
        }
        handleSessionUpdate(session);
    }



    function handleSessionUpdate(session) {
        State.session = session;
        if (session) {
            if (session.staff) return;
            authScreen.style.display = 'none';
            appLayout.style.display = 'flex';
            
            const email = session.user.email;
            State.currentUserEmail = email;
            State.currentUserColor = getUserColor(email);
            if (userEmailEl) userEmailEl.textContent = email;
            if (userAvatarEl) {
                userAvatarEl.textContent = email.charAt(0).toUpperCase();
                applyUserColor(email);
            }
            const roleEl = document.querySelector('.user-role');
            if (roleEl) roleEl.textContent = 'Administrador';

            if (State.clients.length === 0 && !State.isLoading) {
                navigate('agenda');
                loadAllData();
            }
        } else {
            if (State.session && State.session.staff) return;
            authScreen.style.display = 'flex';
            appLayout.style.display = 'none';
            resetAuthState();
        }
    }

    function resetAuthState() {
        if (authLoginForm) {
            authLoginForm.reset();
            // Explicitly clear values to bypass some browser autofill behaviors
            const emailInput = document.getElementById('auth-email');
            const passwordInput = document.getElementById('auth-password');
            if (emailInput) emailInput.value = '';
            if (passwordInput) passwordInput.value = '';
        }
        authError.style.display = 'none';
        authError.className = 'auth-error';
        const btn = document.getElementById('auth-submit-btn');
        if (btn) btn.disabled = false;
        if (authSubmitText) authSubmitText.style.opacity = '1';
        if (authSpinner) authSpinner.style.display = 'none';
    }

    // Auth mode tabs
    function setAuthMode(mode) {
        authMode = mode;
        if (mode === 'admin') {
            authTabAdmin.style.background = 'var(--accent-gradient)';
            authTabAdmin.style.color = '#fff';
            authTabStaff.style.background = 'transparent';
            authTabStaff.style.color = 'var(--text-secondary)';
            authAdminFields.style.display = 'block';
            authStaffFields.style.display = 'none';
            authFormTitle.textContent = 'Iniciar Sesión';
            authFormSubtitle.textContent = 'Accede a tu panel de control';
            authSubmitText.textContent = 'Entrar';
        } else {
            authTabStaff.style.background = 'var(--accent-gradient)';
            authTabStaff.style.color = '#fff';
            authTabAdmin.style.background = 'transparent';
            authTabAdmin.style.color = 'var(--text-secondary)';
            authAdminFields.style.display = 'none';
            authStaffFields.style.display = 'block';
            const accounts = getStaffAccounts();
            if (accounts.length > 0) {
                authFormTitle.textContent = 'Acceso Staff';
                authFormSubtitle.textContent = 'Introduce tu nombre y contraseña';
            } else {
                authFormTitle.textContent = 'Staff no configurado';
                authFormSubtitle.textContent = 'El administrador debe configurar el acceso staff en Ajustes';
            }
            authSubmitText.textContent = 'Entrar como Staff';
        }
        authError.style.display = 'none';
    }

    if (authTabAdmin) authTabAdmin.addEventListener('click', () => setAuthMode('admin'));
    if (authTabStaff) authTabStaff.addEventListener('click', () => setAuthMode('staff'));

    // Handle Auth form submit
    if (authLoginForm) {
        authLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            authSubmitText.style.opacity = '0';
            authSpinner.style.display = 'block';
            const btn = document.getElementById('auth-submit-btn');
            btn.disabled = true;
            authError.style.display = 'none';

            if (authMode === 'staff') {
                const name = document.getElementById('auth-staff-name').value.trim();
                const staffPwd = document.getElementById('auth-staff-password').value;
                const accounts = getStaffAccounts();

                if (accounts.length === 0) {
                    authError.textContent = 'El administrador no ha configurado el acceso staff. Ve a Ajustes > Configuración.';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                    return;
                }

                if (!name) {
                    authError.textContent = 'Introduce tu nombre';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                    return;
                }

                const account = accounts.find(a => a.name === name && a.password === staffPwd);
                if (!account) {
                    authError.textContent = 'Nombre o contraseña incorrectos';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                    return;
                }

                staffName = name;
                localStorage.setItem('nymara_staff_name', name);
                handleStaffSession(account);
            } else {
                try {
                    const email = document.getElementById('auth-email').value;
                    const password = document.getElementById('auth-password').value;
                    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
                    if (error) throw error;
                } catch (err) {
                    console.error('Auth Error:', err);
                    authError.textContent = err.message || 'Error en la autenticación';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                }
            }
        });
    }

    function handleStaffSession(account) {
        const adminEmail = account.adminEmail || localStorage.getItem('nymara_staff_admin_email') || '';
        State.session = { staff: true, user: { email: adminEmail }, staffAccountId: account.id };
        State.currentUserEmail = adminEmail;
        State.currentUserColor = getUserColor(adminEmail);
        State.activeSalonId = account.salonId;
        localStorage.setItem('nymara_agenda_salon', account.salonId);
        staffName = account.name;

        localStorage.setItem('nymara_staff_session_email', adminEmail);
        localStorage.setItem('nymara_staff_name', account.name);
        localStorage.setItem('nymara_staff_salon_id', account.salonId);

        authScreen.style.display = 'none';
        appLayout.style.display = 'flex';

        if (userEmailEl) userEmailEl.textContent = 'Staff: ' + account.name;
        if (userAvatarEl) {
            userAvatarEl.textContent = account.name.charAt(0).toUpperCase();
            userAvatarEl.style.background = '#10b981';
        }
        const roleEl = document.querySelector('.user-role');
        if (roleEl) roleEl.textContent = 'Staff';

        // Hide restricted nav items for staff
        document.querySelectorAll('.nav-item').forEach(item => {
            const target = item.dataset.target;
            if (target === 'salons' || target === 'diagnosis' || target === 'whatsapp') {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        });
        const settingsBtn = document.getElementById('btn-settings');
        if (settingsBtn) settingsBtn.style.display = 'none';

        if (State.clients.length === 0 && !State.isLoading) {
            navigate('agenda');
            loadAllData();
        }
    }



    // Logout logic with two-step confirmation
    const handleLogoutClick = async (e) => {
        const target = e.currentTarget;
        if (target.dataset.confirming === 'true') {
            target.disabled = true;
            target.innerHTML = '<span>Saliendo...</span>';
            
            if (State.session && State.session.staff) {
                staffName = null;
                State.session = null;
                State.clients = [];
                State.services = [];
                State.appointments = [];
                localStorage.removeItem('nymara_staff_session_email');
                localStorage.removeItem('nymara_staff_name');
                // Restore all nav items
                document.querySelectorAll('.nav-item').forEach(item => { item.style.display = ''; });
                const settingsBtn = document.getElementById('btn-settings');
                if (settingsBtn) settingsBtn.style.display = '';
                authScreen.style.display = 'flex';
                appLayout.style.display = 'none';
                resetAuthState();
                const roleEl = document.querySelector('.user-role');
                if (roleEl) roleEl.textContent = 'Administrador';
                return;
            }
            
            await supabase.auth.signOut();
            State.clients = [];
            State.services = [];
            State.appointments = [];
        } else {
            target.dataset.confirming = 'true';
            const originalHtml = target.innerHTML;
            if (target.id === 'btn-logout') {
                target.innerHTML = '<span>¿Salir?</span>';
                target.style.width = 'auto';
                target.style.padding = '0 8px';
            } else {
                const emailSpan = target.querySelector('.user-email');
                if (emailSpan) emailSpan.textContent = '¿Cerrar sesión?';
            }
            
            setTimeout(() => {
                if (target.dataset.confirming === 'true') {
                    target.dataset.confirming = 'false';
                    target.innerHTML = originalHtml;
                    if (target.id === 'btn-logout') {
                        target.style.width = '';
                        target.style.padding = '';
                    } else {
                        const emailSpan = target.querySelector('.user-email');
                        if (emailSpan) emailSpan.textContent = State.currentUserEmail;
                    }
                }
            }, 3000);
        }
    };

    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogoutClick);
    }
    if (userProfileEl) {
        userProfileEl.style.cursor = 'pointer';
        userProfileEl.title = 'Cerrar sesión';
        userProfileEl.addEventListener('click', handleLogoutClick);
    }



    async function addClient(data) {
        data.user_email = State.currentUserEmail;
        const { error } = await supabase.from('clients').insert([data]);
        if (error) { showToast('Error al añadir cliente: ' + error.message, 'error'); return false; }
        State.clients.push(data);
        if (State.session?.staff) addStaffClientId(data.id);
        showToast('Cliente añadido correctamente');
        return true;
    }

    async function calculateFileHash(file) {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function uploadClientPhoto(file, clientId, photoDate, photoType, photoNotes, caspaLevel = null, seboLevel = null, eritemaLevel = null) {
        console.log('uploadClientPhoto called:', { clientId, photoDate, photoType });
        const fileExt = file.name.split('.').pop();
        const photoId = generateId();
        const fileName = `${clientId}/${photoId}.${fileExt}`;
        const photoHash = await calculateFileHash(file);
        
        const { data, error } = await supabase.storage
            .from('client-photos')
            .upload(fileName, file);

        if (error) {
            showToast('Error al subir foto: ' + error.message, 'error');
            console.error('Storage upload error:', error);
            return null;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('client-photos')
            .getPublicUrl(fileName);
        
        const photoRecord = {
            id: photoId,
            client_id: clientId,
            photo_url: publicUrl,
            photo_date: photoDate,
            photo_type: photoType,
            notes: photoNotes,
            photo_hash: photoHash,
            user_email: State.currentUserEmail,
            created_at: new Date().toISOString()
        };
        
        console.log('Inserting photo record:', photoRecord);
        const { error: insertError } = await supabase.from('client_photos').insert(photoRecord);
        if (insertError) {
            console.error('Database insert error details:', JSON.stringify(insertError, null, 2));
            showToast('Error al guardar foto en BD: ' + insertError.message, 'error');
            return null;
        }
        console.log('Photo inserted successfully!');
        return photoRecord;
    }

    async function deleteClientPhoto(photoId, clientId) {
        try {
            const { error } = await supabase.from('client_photos').delete().eq('id', photoId);
            if (error) throw error;
            
            if (State.clientPhotos[clientId]) {
                State.clientPhotos[clientId] = State.clientPhotos[clientId].filter(p => p.id !== photoId);
            }
            
            showToast('Foto eliminada');
            return true;
        } catch (err) {
            console.error('Error deleting photo:', err);
            showToast('Error al eliminar foto: ' + err.message, 'error');
            return false;
        }
    }

    async function updateClientPhoto(photoId, clientId, updates) {
        await supabase.from('client_photos').update(updates).eq('id', photoId);
        
        if (State.clientPhotos[clientId]) {
            const idx = State.clientPhotos[clientId].findIndex(p => p.id === photoId);
            if (idx >= 0) {
                State.clientPhotos[clientId][idx] = { ...State.clientPhotos[clientId][idx], ...updates };
            }
        }
        
        showToast('Foto actualizada');
        return true;
    }

    async function loadClientPhotos(clientId) {
        console.log('loadClientPhotos called for client:', clientId);
        console.log('State.clients sample:', State.clients.slice(0,2).map(c => ({ id: c.id, name: c.name })));
        try {
            const { data, error } = await supabase
                .from('client_photos')
                .select('*')
                .eq('client_id', clientId)
                .order('created_at', { ascending: false });
            
            console.log('loadClientPhotos result:', { data, error, clientId });
            if (error) throw error;
            return data || [];
        } catch (e) {
            console.warn('Error loading photos:', e);
            return [];
        }
    }

    async function loadAllClientPhotos() {
        try {
            const { data, error } = await supabase
                .from('client_photos')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            State.clientPhotos = {};
            if (data) {
                data.forEach(p => {
                    if (!State.clientPhotos[p.client_id]) {
                        State.clientPhotos[p.client_id] = [];
                    }
                    State.clientPhotos[p.client_id].push(p);
                });
            }
            return data || [];
        } catch (e) {
            console.warn('Error loading all photos:', e);
            return [];
        }
    }

    async function updateClient(data) {
        const { error } = await supabase.from('clients').update({ 
            name: data.name, 
            phone: data.phone, 
            email: data.email,
            enviar_was: data.enviar_was,
            whatsapp_template: data.whatsapp_template,
            observations: data.observations 
        }).eq('id', data.id);
        if (error) { 
            console.error('Supabase update error:', error);
            showToast('Error al actualizar: ' + error.message, 'error'); 
            return false; 
        }
        State.clients = State.clients.map(c => c.id === data.id ? data : c);
        showToast('Cliente actualizado correctamente');
        return true;
    }

    async function deleteClient(id) {
        const { error } = await supabase.from('clients').delete().eq('id', id);
        if (error) { showToast('Error al eliminar cliente: ' + error.message, 'error'); return false; }
        State.clients = State.clients.filter(c => c.id !== id);
        showToast('Cliente eliminado');
        return true;
    }

    // ── Services CRUD ──

    async function addService(data) {
        data.user_email = State.currentUserEmail;
        const { error } = await supabase.from('services').insert([data]);
        if (error) { showToast('Error al añadir servicio: ' + error.message, 'error'); return false; }
        State.services.push(data);
        if (State.session?.staff) addStaffServiceId(data.id);
        showToast('Servicio añadido correctamente');
        return true;
    }

    async function updateService(data) {
        const { error } = await supabase.from('services').update({ name: data.name, duration: data.duration, price: data.price }).eq('id', data.id);
        if (error) { showToast('Error al actualizar servicio: ' + error.message, 'error'); return false; }
        State.services = State.services.map(s => s.id === data.id ? data : s);
        showToast('Servicio actualizado correctamente');
        return true;
    }

    async function deleteService(id) {
        const { error } = await supabase.from('services').delete().eq('id', id);
        if (error) { showToast('Error al eliminar servicio: ' + error.message, 'error'); return false; }
        State.services = State.services.filter(s => s.id !== id);
        showToast('Servicio eliminado');
        return true;
    }

    // ── Salons CRUD ──

    async function addSalon(data) {
        data.user_email = State.currentUserEmail;
        console.log('Adding salon:', data);
        const { data: result, error } = await supabase.from('salons').insert([{
            id: data.id,
            name: data.name,
            address: data.address || null,
            phone: data.phone || null,
            email: data.email || null,
            user_email: data.user_email
        }]).select().single();
        
        if (error) { 
            console.error('Error adding salon:', error);
            showToast('Error al añadir salón: ' + error.message, 'error'); 
            return false; 
        }
        console.log('Salon added:', result);
        State.salons.push(result || data);
        showToast('Salón añadido correctamente');
        return true;
    }

    async function updateSalon(data) {
        console.log('Updating salon:', data);
        const { error } = await supabase.from('salons').update({
            name: data.name,
            address: data.address || null,
            phone: data.phone || null,
            email: data.email || null,
            user_email: State.currentUserEmail
        }).eq('id', data.id);
        
        if (error) { 
            console.error('Error updating salon:', error);
            showToast('Error al actualizar salón: ' + error.message, 'error'); 
            return false; 
        }
        State.salons = State.salons.map(s => s.id === data.id ? data : s);
        showToast('Salón actualizado correctamente');
        return true;
    }

    async function deleteSalon(id) {
        console.log('Deleting salon:', id);
        const { error } = await supabase.from('salons').delete().eq('id', id);
        if (error) { 
            console.error('Error deleting salon:', error);
            showToast('Error al eliminar salón: ' + error.message, 'error'); 
            return false; 
        }
        State.salons = State.salons.filter(s => s.id !== id);
        showToast('Salón eliminado');
        return true;
    }

    // ── Appointments CRUD ──

    async function addAppointment(data) {
        // Map JS camelCase to DB snake_case
        const dbRow = {
            id: data.id,
            client_id: data.clientId,
            service_id: data.serviceId,
            date: data.date,
            time: data.time,
            notes: data.notes,
            user_email: State.currentUserEmail || '',
            appointment_photos: data.appointmentPhotos || [],
            is_staff_appointment: !!State.session?.staff,
        };
        if (data.salonId) dbRow.salon_id = data.salonId;
        const { error } = await supabase.from('appointments').insert([dbRow]);
        if (error) { 
            console.error('Insert error details:', JSON.stringify({ dbRow, error }, null, 2));
            showToast('Error al agendar cita: ' + error.message + (error.details ? ' (' + error.details + ')' : ''), 'error'); 
            return false; 
        }
        State.appointments.push(data);
        console.log('State.appointments length after push:', State.appointments.length, 'ClientId:', data.clientId, 'Date:', data.date);
        showToast('Cita agendada correctamente');
        return true;
    }

    async function updateAppointment(id, data) {
        const dbRow = {
            client_id: data.clientId,
            service_id: data.serviceId,
            date: data.date,
            time: data.time,
            notes: data.notes,
            appointment_photos: data.appointmentPhotos || [],
        };
        if (data.salonId) dbRow.salon_id = data.salonId;
        const { error } = await supabase.from('appointments').update(dbRow).eq('id', id);
        if (error) { 
            console.error('Update error details:', JSON.stringify({ dbRow, error }, null, 2));
            showToast('Error al actualizar cita: ' + error.message + (error.details ? ' (' + error.details + ')' : ''), 'error'); 
            return false; 
        }
        const idx = State.appointments.findIndex(a => a.id === id);
        if (idx !== -1) State.appointments[idx] = { ...State.appointments[idx], ...data };
        showToast('Cita actualizada correctamente');
        return true;
    }

    window.editClientPhoto = async function(photoId, clientId, currentDate, currentNotes, currentType) {
        // Obtener la foto actual para extraer valores de diagnóstico
        const { data: photoData } = await supabase.from('client_photos').select('*').eq('id', photoId).single();
        
        // Extraer valores de diagnóstico de las notas o usar valores por defecto
        let caspaVal = 0, seboVal = 5, eritemaVal = 0;
        if (photoData?.notes) {
            const caspaMatch = photoData.notes.match(/Caspa:\s*(\d+)/i);
            const seboMatch = photoData.notes.match(/Sebo:\s*(\d+)/i);
            const eritemaMatch = photoData.notes.match(/Eritema:\s*(\d+)/i);
            if (caspaMatch) caspaVal = parseInt(caspaMatch[1]) || 0;
            if (seboMatch) seboVal = parseInt(seboMatch[1]) || 5;
            if (eritemaMatch) eritemaVal = parseInt(eritemaMatch[1]) || 0;
        }
        
        openModal('Editar Foto', `
            <form id="edit-client-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-client-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" class="form-control" id="edit-client-photo-date" value="${currentDate}">
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-client-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-client-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-client-photo-type').value;
                const newDate = document.getElementById('edit-client-photo-date').value;
                const newCaspa = document.getElementById('edit-client-photo-caspa').value;
                const newSebo = document.getElementById('edit-client-photo-sebo').value;
                const newEritema = document.getElementById('edit-client-photo-eritema').value;
                const newNotes = document.getElementById('edit-client-photo-notes').value;
                
                // Incluir diagnósticos en las notas
                const notesWithDiag = `${newNotes ? newNotes + ' | ' : ''}Caspa: ${newCaspa}, Sebo: ${newSebo}, Eritema: ${newEritema}`;
                
                await updateClientPhoto(photoId, clientId, { 
                    photo_type: newType, 
                    photo_date: newDate, 
                    notes: notesWithDiag
                });
                closeModal();
                showToast('Foto actualizada');
                renderRoute();
            });
        });
    }

    window.editAptPhoto = async function(photoId, aptId, currentDate, currentNotes, currentType) {
        openModal('Editar Foto', `
            <form id="edit-apt-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-apt-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" class="form-control" id="edit-apt-photo-date" value="${currentDate}">
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-apt-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-apt-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-apt-photo-type').value;
                const newDate = document.getElementById('edit-apt-photo-date').value;
                const newNotes = document.getElementById('edit-apt-photo-notes').value;
                
                const apt = State.appointments.find(a => a.id === aptId);
                if (apt && apt.appointmentPhotos) {
                    const photoIdx = apt.appointmentPhotos.findIndex(p => p.id === photoId);
                    if (photoIdx >= 0) {
                        apt.appointmentPhotos[photoIdx].photo_type = newType;
                        apt.appointmentPhotos[photoIdx].photo_date = newDate;
                        apt.appointmentPhotos[photoIdx].notes = newNotes;
                        await supabase.from('appointments').update({ appointment_photos: apt.appointmentPhotos }).eq('id', aptId);
                        
                        // Sync with client_photos if clientPhotoId exists
                        if (apt.appointmentPhotos[photoIdx].clientPhotoId) {
                            await supabase.from('client_photos').update({
                                photo_type: newType,
                                photo_date: newDate,
                                notes: `Cita ${apt.date}: ${newNotes}`
                            }).eq('id', apt.appointmentPhotos[photoIdx].clientPhotoId);
                        }

                        closeModal();
                        showToast('Foto actualizada');
                        renderRoute();
                    }
                }
            });
        });
    }

    async function markAppointmentReminded(id) {
        try {
            const { error } = await supabase.from('appointments').update({ whatsapp_sent: true }).eq('id', id);
            if (error) { 
                console.error('Error al marcar como avisado (¿columna whatsapp_sent existe?):', error);
            }
        } catch (err) {
            console.error('Excepción al actualizar whatsapp_sent:', err);
        }
        const apt = State.appointments.find(a => a.id === id);
        if (apt) apt.whatsappSent = true;
        return true;
    }

    async function deleteAppointment(id) {
        const { error } = await supabase.from('appointments').delete().eq('id', id);
        if (error) { showToast('Error al cancelar cita: ' + error.message, 'error'); return false; }
        State.appointments = State.appointments.filter(a => a.id !== id);
        showToast('Cita cancelada');
        return true;
    }

    /* ═══════════════════════════════════════
       ROUTING
       ═══════════════════════════════════════ */
    let currentRoute = 'agenda';

    function navigate(route) {
        currentRoute = route;
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.target === route);
        });
        renderRoute();
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => navigate(item.dataset.target));
    });

    /* ═══════════════════════════════════════
       MODAL
       ═══════════════════════════════════════ */
    function openModal(title, htmlContent, onMount) {
        modalTitle.textContent = title;
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
        if (onMount) onMount();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => (modalBody.innerHTML = ''), 300);
    }

    btnCloseModal.addEventListener('click', closeModal);

    // Track where mousedown started to prevent accidental closes
    // when user clicks inside modal and drags to overlay before releasing
    let overlayMouseDownTarget = null;
    modalOverlay.addEventListener('mousedown', e => {
        overlayMouseDownTarget = e.target;
    });
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay && overlayMouseDownTarget === modalOverlay) {
            closeModal();
        }
        overlayMouseDownTarget = null;
    });

    /* ═══════════════════════════════════════
       RENDER DISPATCHER
       ═══════════════════════════════════════ */
    function renderRoute() {
        if (State.isLoading) {
            appContent.innerHTML = `
                <div class="fade-in" style="display:flex;align-items:center;justify-content:center;height:60vh;flex-direction:column;gap:1rem;">
                    <div class="loading-spinner"></div>
                    <p style="color:var(--text-secondary);font-size:1.1rem;">Conectando con Supabase…</p>
                </div>`;
            return;
        }

        if (currentRoute === 'agenda') content = getAgendaView();
        else if (currentRoute === 'clients') {
            // Recargar fotos de clientes al entrar a la pestaña
            loadAllClientPhotos().then(() => {
                const clientsContent = getClientsView();
                const fadeInDiv = appContent.querySelector('.fade-in');
                if (fadeInDiv) fadeInDiv.innerHTML = clientsContent;
                attachEvents();
            });
            content = getClientsView();
        }
        else if (currentRoute === 'services') content = getServicesView();
        else if (currentRoute === 'monthly') content = getMonthlyView();
        else if (currentRoute === 'salons') content = getSalonsView();
        else if (currentRoute === 'whatsapp') content = getWhatsAppView();
        else if (currentRoute === 'diagnosis') content = getDiagnosisView();

        appContent.innerHTML = `<div class="fade-in">${content}</div>`;
        
        // Dark mode toggle for diagnosis
        if (currentRoute === 'diagnosis') {
            appContent.classList.add('diagnosis-mode');
        } else {
            appContent.classList.remove('diagnosis-mode');
        }

        attachEvents();

        // Cargar lista de clientes para diagnóstico
        if (currentRoute === 'diagnosis') {
            loadDiagnosisClients();
        }
    }

    /* ═══════════════════════════════════════
       CALENDAR HELPERS
       ═══════════════════════════════════════ */
    function getCalendarDays(year, month) {
        const firstDay = new Date(year, month, 1);
        let startWeekday = firstDay.getDay(); // 0=Sun
        startWeekday = startWeekday === 0 ? 6 : startWeekday - 1; // Convert to Mon=0

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const days = [];

        // Previous month trailing days
        for (let i = startWeekday - 1; i >= 0; i--) {
            const d = prevMonthDays - i;
            const dt = new Date(year, month - 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            const dt = new Date(year, month, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: true });
        }

        // Fill remaining to complete grid (6 rows max)
        const remaining = 42 - days.length;
        for (let d = 1; d <= remaining; d++) {
            const dt = new Date(year, month + 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        return days;
    }

    function getAppointmentsForDate(dateStr) {
        const salonId = State.activeSalonId || 'all';
        const isAdmin = !State.session?.staff;
        
        return State.appointments
            .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
            .sort((a, b) => a.time.localeCompare(b.time));
    }

    /* ═══════════════════════════════════════
       AGENDA VIEW  (Calendar + Day Detail)
       ═══════════════════════════════════════ */
    function getAgendaView() {
        const todayStr = toLocalDateStr(new Date());
        const todaysAppointments = getAppointmentsForDate(todayStr);

        // Calendar grid
        const days = getCalendarDays(State.calYear, State.calMonth);
        const monthLabel = `${MONTH_NAMES[State.calMonth]} ${State.calYear}`;

        let calCells = '';
        days.forEach(day => {
            const apts = getAppointmentsForDate(day.dateStr);
            const isToday = day.dateStr === todayStr;
            const isSelected = day.dateStr === State.selectedDate;
            const classes = [
                'cal-day',
                !day.currentMonth ? 'other-month' : '',
                isToday ? 'is-today' : '',
                isSelected ? 'is-selected' : ''
            ].filter(Boolean).join(' ');

            let eventsHtml = '';
            const maxShow = 2;
            apts.slice(0, maxShow).forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId);
                const cName = client ? client.name.split(' ')[0] : '??';
                const aptUserColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
                eventsHtml += `<span class="cal-event" style="border-left:3px solid ${aptUserColor}">${apt.time} ${cName}${apt.isStaffAppointment ? ' <span class="staff-badge">Staff</span>' : ''}</span>`;
            });
            if (apts.length > maxShow) {
                eventsHtml += `<span class="cal-more">+${apts.length - maxShow} más</span>`;
            }

            calCells += `
                <div class="${classes}" data-date="${day.dateStr}">
                    <span class="cal-day-number">${day.date.getDate()}</span>
                    ${eventsHtml}
                </div>`;
        });

        // Day detail panel
        const detailDate = State.selectedDate || todayStr;
        const detailApts = getAppointmentsForDate(detailDate);
        console.log('Agenda view: appointments count in State:', State.appointments.length, 'selectedDate:', State.selectedDate, 'detailDate:', detailDate, 'apts for date:', detailApts.length);
        const detailDateObj = new Date(detailDate + 'T00:00:00');
        const detailLabel = detailDateObj.toLocaleDateString('es-ES', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });

        let detailHtml = '';
        if (detailApts.length === 0) {
            detailHtml = `
                <div class="empty-state" style="padding:2rem">
                    <p>No hay citas para este día.</p>
                </div>`;
        } else {
            detailHtml = `<div class="day-detail-list">`;
            detailApts.forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
                const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0 };
const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
                const endStr = endTime.toTimeString().substring(0, 5);
                
const userColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
                const userInitial = apt.userEmail ? apt.userEmail.charAt(0).toUpperCase() : '?';
                const userDisplay = apt.userEmail ? apt.userEmail.split('@')[0] : 'Sistema';
                
                const appointmentPhotos = apt.appointmentPhotos || [];
                let photosHtml = '';
                if (appointmentPhotos.length > 0) {
                    photosHtml = '<div class="day-detail-photos" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px">';
                    appointmentPhotos.forEach(p => {
                        const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                        const photoDate = p.photo_date || '';
                        photosHtml += `
                            <div class="apt-mini-photo" data-apt-id="${apt.id}" data-photo-id="${p.id}" style="position:relative;text-align:center">
                                <img src="${p.photo_url}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                                <div style="font-size:0.6rem;color:var(--text-secondary)">${photoDate}</div>
                                <div style="position:absolute;top:0;left:0;right:0;display:flex;justify-content:center;gap:2px">
                                    <button type="button" class="apt-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">✏️</button>
                                    <button type="button" class="apt-photo-delete-btn" data-photo-id="${p.id}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                                </div>
                            </div>`;
                    });
                    photosHtml += '</div>';
                }
                 
                detailHtml += `
                    <div class="day-detail-item">
                        <div class="day-detail-time" style="color:${userColor}">${apt.time} – ${endStr}</div>
                        <div class="day-detail-info">
                            <strong>${client.name}${apt.isStaffAppointment ? ' <span class="staff-badge">Staff</span>' : ''}</strong>
                            <span>${service.name} · ${service.duration} min${apt.notes ? ' · ' + apt.notes : ''}</span>
                            <span style="font-size:0.75rem;color:var(--accent-color);display:block;margin-top:2px">📍 ${State.salons.find(s => s.id === apt.salonId)?.name || 'Salón desconocido'}</span>
                            <span class="apt-user-key" style="color:${userColor}" title="${apt.userEmail}">${userDisplay}</span>
                            ${photosHtml}
                            </div>
                        </div>
                        <div class="day-detail-actions">
                            ${(!State.session?.staff || isStaffAppointment(apt.id)) ? `
                            <button class="edit-apt-btn" data-id="${apt.id}" title="Editar cita" style="background:none;border:none;cursor:pointer;margin-right:8px;">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button class="delete-btn" data-id="${apt.id}" title="Eliminar cita">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            ` : ''}
                        </div>
                    </div>`;
            });
            detailHtml += `</div>`;
        }

        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        const startDayMins = startH * 60 + startM;
        const endDayMins = endH * 60 + endM;
        const totalMinutes = endDayMins - startDayMins;
        
        let timelineHtml = '<div class="timeline-wrapper">';
        timelineHtml += `<div class="timeline-header"><span>${State.settings.startTime}</span><span>${State.settings.endTime}</span></div>`;
        timelineHtml += '<div class="timeline-bar" title="Horario comercial para este día">';
        
        if (totalMinutes > 0) {
            let cursorMins = startDayMins;
            const bgPalette = [
                'linear-gradient(135deg, #8b5cf6, #d946ef)', // Purple
                'linear-gradient(135deg, #3b82f6, #2dd4bf)', // Blue to Teal
                'linear-gradient(135deg, #ec4899, #f43f5e)', // Pink to Rose
                'linear-gradient(135deg, #f59e0b, #ea580c)', // Amber to Orange
                'linear-gradient(135deg, #6366f1, #a855f7)'  // Indigo to Purple
            ];

            detailApts.forEach((apt, idx) => {
                const [h, m] = apt.time.split(':').map(Number);
                const aptStart = h * 60 + m;
                const aptServ = State.services.find(s => s.id === apt.serviceId);
                const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
                const aptEnd = aptStart + aptDur;

                const clippedStart = Math.max(startDayMins, aptStart);
                const clippedEnd = Math.min(endDayMins, aptEnd);

                if (clippedStart > cursorMins) {
                    const pct = ((clippedStart - cursorMins) / totalMinutes) * 100;
                    const stH_str = Math.floor(cursorMins / 60).toString().padStart(2, '0');
                    const stM_str = (cursorMins % 60).toString().padStart(2, '0');
                    const endH_str = Math.floor(clippedStart / 60).toString().padStart(2, '0');
                    const endM_str = (clippedStart % 60).toString().padStart(2, '0');
                    timelineHtml += `<div class="timeline-segment free" style="width:${pct}%;" title="Libre: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"></div>`;
                }
                
                if (clippedEnd > clippedStart) {
                    const pct = ((clippedEnd - clippedStart) / totalMinutes) * 100;
                    const [stH_str, stM_str] = [Math.floor(clippedStart / 60).toString().padStart(2, '0'), (clippedStart % 60).toString().padStart(2, '0')];
                    const [endH_str, endM_str] = [Math.floor(clippedEnd / 60).toString().padStart(2, '0'), (clippedEnd % 60).toString().padStart(2, '0')];
                    const bgOption = bgPalette[idx % bgPalette.length];
                    timelineHtml += `<div class="timeline-segment booked" style="width:${pct}%; background: ${bgOption}; border-left: 1px solid rgba(255,255,255,0.4); border-right: 1px solid rgba(255,255,255,0.4);" title="Ocupado: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"><span class="segment-time">${stH_str}:${stM_str}-${endH_str}:${endM_str}</span></div>`;
                }

                cursorMins = Math.max(cursorMins, clippedEnd);
            });
            
            if (cursorMins < endDayMins) {
                const pct = ((endDayMins - cursorMins) / totalMinutes) * 100;
                const stH_str = Math.floor(cursorMins / 60).toString().padStart(2, '0');
                const stM_str = (cursorMins % 60).toString().padStart(2, '0');
                const endH_str = Math.floor(endDayMins / 60).toString().padStart(2, '0');
                const endM_str = (endDayMins % 60).toString().padStart(2, '0');
                timelineHtml += `<div class="timeline-segment free" style="width:${pct}%;" title="Libre: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"></div>`;
            }
        }
        timelineHtml += '</div>';

        // Time ruler with all time slots
        const slotInterval = 60; // minutes per slot, show hourly marks
        const numSlots = Math.floor(totalMinutes / slotInterval);
        timelineHtml += '<div class="timeline-ruler">';
        for (let i = 0; i <= numSlots; i++) {
            const mins = startDayMins + i * slotInterval;
            if (mins > endDayMins) break;
            const h = Math.floor(mins / 60).toString().padStart(2, '0');
            const m = (mins % 60).toString().padStart(2, '0');
            const pct = (i / numSlots) * 100;
            timelineHtml += `<span class="timeline-tick" style="left:${pct}%">${h}:${m}</span>`;
        }
        timelineHtml += '</div>';

        timelineHtml += `
            <div class="timeline-legend">
                <div class="legend-item"><span class="legend-color free-color"></span> Libre</div>
                <div class="legend-item"><span class="legend-color booked-color"></span> Ocupado</div>
            </div>
        </div>`;

        return `
            ${State.salons.length > 0 ? `
            <div style="text-align:center; margin-bottom: 1.5rem;">
                ${State.session?.staff
                    ? `<span class="salon-title">${State.salons.find(s => s.id === State.activeSalonId)?.name || 'Salón'}</span>`
                    : `<select id="agenda-salon-select" class="salon-title-select">
                    <option value="all" ${State.activeSalonId === 'all' ? 'selected' : ''}>Todos los Salones</option>
                    ${State.salons.map(s => `<option value="${s.id}" ${State.activeSalonId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>`}
            </div>
            ` : ''}
            <div class="section-header">
                <div>
                    <h1 class="section-title">Agenda</h1>
                    <p style="color:var(--text-secondary)">Calendario de citas · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
                    ${!State.session?.staff ? `
                    <button class="btn btn-secondary" id="btn-settings" title="Configuración">
                        Configuración
                    </button>` : ''}
                    <button class="btn btn-primary" id="btn-add-appointment" onclick="showAppointmentForm()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Nueva Cita
                    </button>
                </div>
            </div>

            <!-- Stats -->
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Citas Hoy</h3><p>${todaysAppointments.length}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes</h3><p>${State.clients.length}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Servicios</h3><p>${State.services.length}</p></div>
                </div>
            </div>


            <!-- Calendar -->
            <div class="calendar-wrapper">
                <div class="calendar-nav">
                    <button id="cal-prev">◀</button>
                    <h2>${monthLabel}</h2>
                    <button id="cal-next">▶</button>
                </div>
                <div class="calendar-grid">
                    ${WEEKDAY_NAMES.map(n => `<div class="cal-header">${n}</div>`).join('')}
                    ${calCells}
                </div>
            </div>

            <!-- Day Detail -->
            <div class="day-detail">
                <h3>📋 ${detailLabel}</h3>
                ${timelineHtml}
                ${detailHtml}
            </div>
        `;
    }

    /* ═══════════════════════════════════════
       CLIENTS VIEW
       ═══════════════════════════════════════ */
    function getClientsView() {
        let rows = '';
        if (State.clients.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <h3>No hay clientes registrados</h3>
                <p>Añade tu primer cliente pulsando el botón superior.</p>
            </div>`;
        } else {
            rows = `<div class="clients-list">${State.clients.map(c => {
                return `
                <div class="client-card" data-client-id="${c.id}">
                    <div class="client-header">
                        <div class="client-info">
                            <h3 style="margin:0;font-weight:600">${c.name}</h3>
                            <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary)">
                                ${c.phone ? `<span><a href="https://wa.me/${c.phone.replace(/\D/g, '')}" target="_blank" style="color:var(--text-secondary)">📱 ${c.phone}</a></span>` : ''}
                                ${c.email ? `<span>✉️ ${c.email}</span>` : ''}
                                <span class="${c.enviar_was ? 'status-success' : 'status-danger'}" style="font-size:0.75rem">WA: ${c.enviar_was ? 'Sí' : 'No'}</span>
                            </div>
                             ${c.observations ? `<p style="font-size:0.8rem;color:var(--text-secondary);margin:4px 0 0;font-style:italic">"${c.observations}"</p>` : ''}
                             ${State.clientPhotos && State.clientPhotos[c.id] && State.clientPhotos[c.id].length > 0 ? `
                                 <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
                                     ${State.clientPhotos[c.id].slice(0, 4).map(p => {
                                         const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                                         return `<div style="position:relative;text-align:center">
                                             <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid var(--border-color)" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                             <div style="font-size:0.6rem;color:var(--text-secondary);margin-top:2px">${photoType}</div>
                                             <div style="font-size:0.55rem;color:var(--text-secondary)">${p.photo_date || ''}</div>
                                         </div>`;
                                     }).join('')}
                                     ${State.clientPhotos[c.id].length > 4 ? `<button style="font-size:0.75rem;color:var(--primary-color);align-self:center;cursor:pointer;background:none;border:none;padding:0" onclick="showClientForm(State.clients.find(c => c.id === '${c.id}'))">+${State.clientPhotos[c.id].length - 4} más</button>` : ''}
                                 </div>
                             ` : ''}
                         </div>
                        <div class="client-actions">
                            ${(!State.session?.staff || isStaffClient(c.id)) ? `
                            <button class="edit-btn" data-id="${c.id}" data-type="client" title="Editar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button class="delete-btn" data-id="${c.id}" data-type="client" title="Eliminar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            ` : ''}
                        </div>
                    </div>
                </div>`;
            }).join('')}</div>`;
        }

        return `
            <div class="section-header">
                <div><h1 class="section-title">Clientes</h1><p style="color:var(--text-secondary)">Base de datos de clientes · <span class="supabase-badge">⚡ Supabase</span></p></div>
                <button class="btn btn-primary" id="btn-add-client">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Cliente
                </button>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       SERVICES VIEW
       ═══════════════════════════════════════ */
    function getServicesView() {
        let rows = '';
        if (State.services.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <h3>No hay servicios registrados</h3>
                <p>Define los servicios que ofreces a tus clientes.</p>
            </div>`;
        } else {
            rows = `
            <div class="data-card">
                <table class="table">
                    <thead><tr><th>Servicio</th><th>Duración</th><th>Precio</th><th>Acciones</th></tr></thead>
                    <tbody>
                    ${State.services.map(s => `
                        <tr>
                            <td style="font-weight:600">${s.name}</td>
                            <td>${s.duration} min</td>
                            <td>${parseFloat(s.price).toFixed(2)} €</td>
                            <td>
                                <div class="actions">
                                    ${(!State.session?.staff || isStaffService(s.id)) ? `
                                    <button class="edit-btn" data-id="${s.id}" data-type="service" title="Editar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button class="delete-btn" data-id="${s.id}" data-type="service" title="Eliminar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    ` : ''}
                                </div>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
        }

        return `
            <div class="section-header">
                <div><h1 class="section-title">Servicios</h1><p style="color:var(--text-secondary)">Catálogo de servicios · <span class="supabase-badge">⚡ Supabase</span></p></div>
                <button class="btn btn-primary" id="btn-add-service">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Servicio
                </button>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       DAILY LISTING VIEW
       ═══════════════════════════════════════ */
    function getMonthlyView() {
        const dateStr = State.dailyDate;
        const dateObj = new Date(dateStr + 'T00:00:00');
        const dayLabel = dateObj.toLocaleDateString('es-ES', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });

        const salonId = State.activeSalonId || 'all';
        const isAdmin = !State.session?.staff;
        const showSalonCol = (salonId === 'all' || isAdmin) && State.salons.length > 0;

        const dayAppointments = State.appointments
            .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
            .sort((a, b) => a.time.localeCompare(b.time));

        // Summary stats
        const totalCitas = dayAppointments.length;
        let totalMinutos = 0;
        const clientesUnicos = new Set();
        dayAppointments.forEach(apt => {
            const service = State.services.find(s => s.id === apt.serviceId);
            if (service) {
                totalMinutos += parseInt(service.duration) || 0;
            }
            clientesUnicos.add(apt.clientId);
        });
        const totalHoras = Math.floor(totalMinutos / 60);
        const remainMin = totalMinutos % 60;

        const colCount = showSalonCol ? 6 : 5;

        let tableRows = '';
        if (dayAppointments.length === 0) {
            tableRows = `
                <tr>
                    <td colspan="${colCount}" style="text-align:center;padding:3rem;color:var(--text-secondary)">
                        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom:0.75rem;opacity:0.35;display:block;margin-left:auto;margin-right:auto;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        No hay citas registradas en este día.
                    </td>
                </tr>`;
        } else {
            dayAppointments.forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
                const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0, price: 0 };
                const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
                const endStr = endTime.toTimeString().substring(0, 5);
                const salon = State.salons.find(s => s.id === apt.salonId);
                const staffClass = apt.isStaffAppointment ? ' staff-apt' : '';
                const staffBadge = apt.isStaffAppointment ? ' <span class="staff-badge">Staff</span>' : '';

                tableRows += `
                    <tr class="monthly-apt-row${staffClass}">
                        <td class="monthly-time-cell">
                            <span class="monthly-time">${apt.time}</span>
                            <span class="monthly-time-end">– ${endStr}</span>
                        </td>
                        <td><div style="font-weight:600">${client.name}${staffBadge}</div></td>
                        ${showSalonCol ? `<td><span class="daily-salon-badge">${salon ? salon.name : '—'}</span></td>` : ''}
                        <td><span class="monthly-service-badge">${service.name}</span></td>
                        <td>${service.duration} min</td>
                        <td style="color:var(--text-secondary);font-size:0.85rem;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${apt.notes || '—'}</td>
                    </tr>`;
            });
        }

        return `
            ${State.salons.length > 0 ? `
            <div style="text-align:center; margin-bottom: 1.5rem;">
                ${State.session?.staff
                    ? `<span class="salon-title">${State.salons.find(s => s.id === State.activeSalonId)?.name || 'Salón'}</span>`
                    : `<select id="daily-salon-select" class="salon-title-select">
                    <option value="all" ${State.activeSalonId === 'all' ? 'selected' : ''}>Todos los Salones</option>
                    ${State.salons.map(s => `<option value="${s.id}" ${State.activeSalonId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>`}
            </div>
            ` : ''}
            <div class="section-header">
                <div>
                    <h1 class="section-title">Listado Diario</h1>
                    <p style="color:var(--text-secondary)">Detalle de citas por día · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
                    <button class="btn btn-primary" id="btn-print-daily">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        Imprimir
                    </button>
                </div>
            </div>

            <!-- Date Selector -->
            <div class="daily-controls">
                <button class="cal-nav-btn" id="daily-prev">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div class="daily-selectors">
                    <input type="date" class="form-control daily-date-input" id="daily-date-input" value="${dateStr}">
                </div>
                <button class="cal-nav-btn" id="daily-next">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <!-- Summary Cards -->
            <div class="stats-row monthly-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Total Citas</h3><p>${totalCitas}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes Únicos</h3><p>${clientesUnicos.size}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Tiempo Total</h3><p>${totalHoras}h ${remainMin}m</p></div>
                </div>
            </div>

            <!-- Listing Table -->
            <div class="data-card monthly-table-card" id="daily-print-area">
                <div class="monthly-table-header">
                    <h3>📋 ${dayLabel}</h3>
                    <span class="monthly-count-badge">${totalCitas} cita${totalCitas !== 1 ? 's' : ''}</span>
                </div>
                <table class="table monthly-table">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Cliente</th>
                            ${showSalonCol ? '<th>Salón</th>' : ''}
                            <th>Servicio</th>
                            <th>Duración</th>
                            <th>Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        `;
    }

    /* ═══════════════════════════════════════
       WHATSAPP REMINDERS VIEW
       ═══════════════════════════════════════ */
    function getWhatsAppView() {
        // Buscamos citas en los próximos 3 días para dar más margen
        const today = new Date();
        const futureLimit = new Date(today);
        futureLimit.setDate(today.getDate() + 3);
        
        const limitStr = toLocalDateStr(futureLimit);
        const todayStr = toLocalDateStr(today);

        const toRemind = State.appointments.filter(apt => {
            // Citas entre hoy y dentro de 3 días que NO hayan sido avisadas
            if (apt.date < todayStr || apt.date > limitStr) return false;
            if (apt.whatsappSent) return false;
            
            const client = State.clients.find(c => c.id === apt.clientId);
            return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
        }).sort((a, b) => {
            if (a.date !== b.date) return a.date.localeCompare(b.date);
            return a.time.localeCompare(b.time);
        });

        if (toRemind.length === 0) {
            return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Recordatorios WhatsApp</h1>
                    <p style="color:var(--text-secondary)">Gestiona los avisos para las próximas citas · <span class="supabase-badge">⚡ Automático</span></p>
                </div>
            </div>
            <div class="data-card" style="padding:3rem;text-align:center;">
                <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="opacity:0.25;margin-bottom:1rem;"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                <h3 style="margin-bottom:0.5rem;">No hay recordatorios</h3>
                <p style="color:var(--text-secondary);">No hay citas pendientes de notificar en los próximos 3 días.</p>
            </div>`;
        }

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Recordatorios WhatsApp</h1>
                    <p style="color:var(--text-secondary)">Gestiona los avisos para las próximas citas · <span class="supabase-badge">⚡ Automático</span></p>
                </div>
            </div>

            <div class="data-card monthly-table-card">
                <div class="monthly-table-header" style="background: var(--bg-surface); padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                    <h3 style="display:flex;align-items:center;gap:0.75rem;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Próximas Citas (3 días)
                    </h3>
                    <span class="monthly-count-badge">${toRemind.length} pendiente${toRemind.length !== 1 ? 's' : ''}</span>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Servicio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>${toRemind.map(apt => {
                        const client = State.clients.find(c => c.id === apt.clientId);
                        const service = State.services.find(s => s.id === apt.serviceId);
                        const dObj = new Date(apt.date + 'T00:00:00');
                        const dLabel = dObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
                        
                        return `
                            <tr data-aptid="${apt.id}">
                                <td>
                                    <div style="font-weight:600">${client ? client.name : 'Cliente desconocido'}${apt.isStaffAppointment ? ' <span class="staff-badge">Staff</span>' : ''}</div>
                                    <div style="font-size:0.8rem;color:var(--text-secondary)">${client ? client.phone : 'Sin teléfono'}</div>
                                </td>
                                <td><span class="status-badge" style="background:var(--bg-body);color:var(--text-primary)">${dLabel}</span></td>
                                <td><div style="font-weight:500;color:var(--accent-primary)">${apt.time}</div></td>
                                <td><span class="monthly-service-badge">${service ? service.name : '—'}</span></td>
                                <td>
                                    <button class="btn btn-primary btn-sm send-reminder-btn" 
                                            style="padding: 0.4rem 0.8rem;"
                                            data-name="${client ? client.name : ''}" 
                                            data-phone="${client ? client.phone : ''}" 
                                            data-date="${apt.date}" 
                                            data-time="${apt.time}">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;vertical-align:middle"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                                        Recordar
                                    </button>
                                </td>
                            </tr>`;
                    }).join('')}</tbody>
                </table>
            </div>
            
            <p style="margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.85rem; text-align: center; font-style: italic;">
                * Debes tener abierta esta pestaña para gestionar los recordatorios diarios.
            </p>
        `;
    }

    /* ═══════════════════════════════════════
DIAGNOSIS VIEW - FULLY INTEGRATED
        ═══════════════════════════════════════ */
    let diagnosisImage = null;
    let diagnosisClientId = null;
    let diagnosisClientName = null;
    let currentDiagnosisImage = null;

    function getDiagnosisView() {
        const hasClient = sessionStorage.getItem('nymara_diagnosis_client_id');
        const clientName = sessionStorage.getItem('nymara_diagnosis_client_name') || '';
        const clientPhone = sessionStorage.getItem('nymara_diagnosis_client_phone') || '';
        
        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Diagnóstico Capilar</h1>
                    <p style="color:var(--text-secondary)">Análisis avanzado del cuero cabelludo · <span class="supabase-badge">⚡ IA Vision</span></p>
                </div>
             </div>
             
            <div id="diagnosis-client-selection" style="display: ${hasClient ? 'none' : 'block'};">
                <div style="max-width:660px;margin:1.5rem auto;padding:2rem;background:var(--bg-card);border:2px solid var(--accent-color);border-radius:16px;box-shadow:0 0 30px rgba(167,139,250,0.3);">
                    <h2 style="margin-top:0;color:#fff;font-size:1.4rem;text-align:center;margin-bottom:0.5rem;">SELECCIONAR CLIENTE</h2>
                    <p style="color:var(--text-secondary);text-align:center;margin-bottom:1.5rem;font-size:0.9rem;">Elija un cliente de la lista para realizar el diagnóstico capilar</p>
                    <div id="diagnosis-clients-list"></div>
                </div>
            </div>
            
            <div id="diagnosis-main" style="display: ${hasClient ? 'block' : 'none'};">
                <div style="background:var(--bg-card);padding:0.85rem;border-radius:12px;margin-bottom:0.85rem;display:flex;justify-content:space-between;align-items:center;border:2px solid var(--accent-color);">
                    <div>
                        <div style="color:#fff;font-size:0.75rem;margin-bottom:4px;">CLIENTE SELECCIONADO</div>
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span id="selected-client-name" style="color:#fff;font-size:1.15rem;font-weight:bold;">${clientName}</span>
                            <span id="selected-client-phone" style="color:var(--accent-color);font-size:0.85rem;font-weight:600;">${clientPhone}</span>
                        </div>
                    </div>
                    <button id="btn-change-client" class="secondary-btn btn-sm">Cambiar Cliente</button>
                </div>
                <iframe src="diagnosis/index.html" class="diagnosis-iframe" style="width:100%;height:calc(100vh - 240px);border:none;border-radius:12px;background:var(--bg-card);"></iframe>
            </div>
        `;
    }

    function loadDiagnosisClients() {
        const list = document.getElementById('diagnosis-clients-list');
        if (!list) return;

        if (!State.clients || !Array.isArray(State.clients) || State.clients.length === 0) {
            list.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:1rem;">No hay clientes registrados.</p>';
            return;
        }

        list.innerHTML = State.clients.map(client => `
            <div class="diagnosis-client-card" data-client-id="${client.id}" style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;margin-bottom:0.5rem;background:var(--bg-dark);border:1px solid var(--border-color);border-radius:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='var(--accent-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:34px;height:34px;background:var(--accent-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;font-weight:bold;font-size:0.85rem;">${client.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <strong style="color:#fff;font-size:0.9rem;">${client.name}</strong>
                        <span style="color:var(--text-secondary);font-size:0.8rem;display:block;">${client.phone || 'Sin teléfono'}</span>
                    </div>
                </div>
                <span style="padding:0.35rem 0.75rem;background:var(--accent-color);color:#000;border-radius:8px;font-weight:600;font-size:0.8rem;">Seleccionar</span>
            </div>
        `).join('');

        // Limpiar evento anterior y agregar delegación
        list.onclick = null;
        list.onclick = (e) => {
            const card = e.target.closest('.diagnosis-client-card');
            if (!card) return;
            
            const clientId = card.dataset.clientId;
            if (!clientId) return;
            
            const client = State.clients.find(c => c.id === clientId);
            if (client) {
                selectClientForDiagnosis(client);
            }
        };
    }

    /* ═════════════════════════════════════
        SALONS VIEW
        ═════════════════════════════════════ */
    function getSalonsView() {
        if (State.salons.length === 0) {
            return `
                <div class="section-header">
                    <div>
                        <h1 class="section-title">Salones</h1>
                        <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="supabase-badge">⚡ Supabase</span></p>
                    </div>
                    <button class="btn btn-primary" id="btn-add-salon">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Salón
                    </button>
                </div>
                <div class="empty-state data-card">
                    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <h3>No hay salones registrados</h3>
                    <p>Añade tu primer salón para comenzar.</p>
                </div>`;
        }

        const rows = State.salons.map(s => `
            <div class="client-card" data-salon-id="${s.id}">
                <div class="client-header">
                    <div class="client-info">
                        <h3 style="margin:0;font-weight:600">${s.name}</h3>
                        <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">
                            ${s.address ? `<span>📍 ${s.address}</span>` : ''}
                            ${s.phone ? `<span>📱 ${s.phone}</span>` : ''}
                        </div>
                    </div>
                    <div class="client-actions">
                        <button class="btn btn-sm btn-secondary edit-btn" data-id="${s.id}" data-type="salon" title="Editar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        </button>
                        <button class="btn btn-sm btn-secondary delete-btn" data-id="${s.id}" data-type="salon" title="Eliminar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Salones</h1>
                    <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <button class="btn btn-primary" id="btn-add-salon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Salón
                </button>
            </div>
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Salones</h3><p>${State.salons.length}</p></div>
                </div>
            </div>
            <div class="clients-list">${rows}</div>
        `;
    }

    function showSalonForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="salon-form">
                <div class="form-group">
                    <label>Nombre del Salón</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" class="form-control" name="address" value="${isEdit ? (info.address || '') : ''}" placeholder="Calle, número, ciudad...">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" value="${isEdit ? (info.phone || '') : ''}" placeholder="+34 600 000 000">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${isEdit ? (info.email || '') : ''}" placeholder="salon@ejemplo.com">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Salón' : 'Nuevo Salón', html, () => {
            document.getElementById('salon-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = {
                    id: isEdit ? info.id : generateId(),
                    name: fd.get('name'),
                    address: fd.get('address'),
                    phone: fd.get('phone'),
                    email: fd.get('email')
                };

                let success;
                if (isEdit) success = await updateSalon(data);
                else success = await addSalon(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
    }

    /* ═════════════════════════════════════
        MONTHLY LISTING VIEW
        ═════════════════════════════════════ */
    function attachEvents() {
        // Add buttons
        const btnSettings = document.getElementById('btn-settings');
        if (btnSettings) btnSettings.addEventListener('click', showSettingsForm);

        const btnAddClient = document.getElementById('btn-add-client');
        if (btnAddClient) btnAddClient.addEventListener('click', () => showClientForm());

        const btnAddService = document.getElementById('btn-add-service');
        if (btnAddService) btnAddService.addEventListener('click', () => showServiceForm());

        // Salons
        const btnAddSalon = document.getElementById('btn-add-salon');
        if (btnAddSalon) btnAddSalon.addEventListener('click', () => showSalonForm());

        // WhatsApp Reminder direct buttons
        document.querySelectorAll('.send-reminder-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                try {
                    const { date, time } = e.currentTarget.dataset;
                    const aptId = e.currentTarget.closest('tr')?.dataset.aptid;

                    let name = '', phone = '', template = null, salonName = '', serviceName = '';
                    if (aptId) {
                        const apt = State.appointments.find(a => a.id === aptId);
                        if (apt) {
                            const client = State.clients.find(c => c.id === apt.clientId);
                            const salon = State.salons.find(s => s.id === apt.salonId);
                            const service = State.services.find(s => s.id === apt.serviceId);
                            name = client?.name || e.currentTarget.dataset.name || '';
                            phone = client?.phone || e.currentTarget.dataset.phone || '';
                            template = client?.whatsapp_template || null;
                            salonName = salon?.name || '';
                            serviceName = service?.name || '';
                        }
                    } else {
                        name = e.currentTarget.dataset.name || '';
                        phone = e.currentTarget.dataset.phone || '';
                    }

                    sendWASMessage(phone, name, date, time, template, salonName, serviceName);
                    
                    if (aptId) {
                        await markAppointmentReminded(aptId);
                        renderRoute();
                        showToast('Recordatorio marcado como enviado');
                    }
                } catch (err) {
                    console.error('Error al enviar recordatorio:', err);
                    showToast('Error al enviar recordatorio', 'error');
                }
            });
        });

        // Diagnosis - Nuevo Cliente
        const btnNewClientDiagnosis = document.getElementById('btn-new-client-diagnosis');
        if (btnNewClientDiagnosis) {
            btnNewClientDiagnosis.addEventListener('click', () => {
                showClientFormForDiagnosis();
            });
        }

        // Diagnosis - Mostrar clientes existentes
        const btnShowExistingClients = document.getElementById('btn-show-existing-clients');
        if (btnShowExistingClients) {
            btnShowExistingClients.addEventListener('click', () => {
                const list = document.getElementById('existing-clients-list');
                if (list) {
                    list.style.display = list.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        // Diagnosis - Buscar cliente
        const clientSearchInput = document.getElementById('client-search-input');
        if (clientSearchInput) {
            clientSearchInput.addEventListener('input', e => {
                const searchTerm = e.target.value.toLowerCase();
                document.querySelectorAll('.diagnosis-client-card').forEach(card => {
                    const name = card.querySelector('strong')?.textContent.toLowerCase() || '';
                    const phone = card.querySelector('span')?.textContent.toLowerCase() || '';
                    card.style.display = (name.includes(searchTerm) || phone.includes(searchTerm)) ? 'flex' : 'none';
                });
            });
        }

        // Diagnosis - Seleccionar cliente existente
        document.querySelectorAll('.select-client-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                const clientId = e.currentTarget.dataset.clientId;
                const clientName = e.currentTarget.dataset.clientName;
                const client = State.clients.find(c => c.id === clientId);
                if (client) {
                    await selectClientForDiagnosis(client);
                }
            });
        });

        // Diagnosis - Cambiar cliente
        const btnChangeClient = document.getElementById('btn-change-client');
        if (btnChangeClient) {
            btnChangeClient.addEventListener('click', () => {
                document.getElementById('diagnosis-client-selection').style.display = 'block';
                document.getElementById('diagnosis-main').style.display = 'none';
            });
        }

        // Daily listing controls
        const dailyPrev = document.getElementById('daily-prev');
        const dailyNext = document.getElementById('daily-next');
        const dailyDateInput = document.getElementById('daily-date-input');

        if (dailyPrev) dailyPrev.addEventListener('click', () => {
            const d = new Date(State.dailyDate + 'T00:00:00');
            d.setDate(d.getDate() - 1);
            State.dailyDate = toLocalDateStr(d);
            renderRoute();
        });
        if (dailyNext) dailyNext.addEventListener('click', () => {
            const d = new Date(State.dailyDate + 'T00:00:00');
            d.setDate(d.getDate() + 1);
            State.dailyDate = toLocalDateStr(d);
            renderRoute();
        });
        if (dailyDateInput) dailyDateInput.addEventListener('change', e => {
            State.dailyDate = e.target.value;
            renderRoute();
        });

        // Print daily listing
        const btnPrint = document.getElementById('btn-print-daily');
        if (btnPrint) btnPrint.addEventListener('click', () => {
            window.print();
        });

        // Calendar navigation
        const btnPrev = document.getElementById('cal-prev');
        const btnNext = document.getElementById('cal-next');
        if (btnPrev) btnPrev.addEventListener('click', () => {
            State.calMonth--;
            if (State.calMonth < 0) { State.calMonth = 11; State.calYear--; }
            renderRoute();
        });
        if (btnNext) btnNext.addEventListener('click', () => {
            State.calMonth++;
            if (State.calMonth > 11) { State.calMonth = 0; State.calYear++; }
            renderRoute();
        });

        // Salon filter
        const salonSelects = [document.getElementById('agenda-salon-select'), document.getElementById('daily-salon-select')];
        salonSelects.forEach(select => {
            if (select) {
                select.addEventListener('change', e => {
                    State.activeSalonId = e.target.value;
                    localStorage.setItem('nymara_agenda_salon', e.target.value);
                    State.selectedDate = null; // Reset selected date when changing salon
                    renderRoute();
                });
            }
        });

        // Calendar day click
        document.querySelectorAll('.cal-day').forEach(dayEl => {
            dayEl.addEventListener('click', () => {
                State.selectedDate = dayEl.dataset.date;
                renderRoute();
            });
        });
    }

    /* ═══════════════════════════════════════
       GLOBAL EVENT DELEGATION
       (Attached only once to document)
       ═══════════════════════════════════════ */
    document.addEventListener('click', async e => {
        // 1. Generic Delete Buttons (.delete-btn) - Clients, Services, Salons, Appointments
        const delBtn = e.target.closest('.delete-btn');
        if (delBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (delBtn.dataset.confirming === 'true') {
                const id = delBtn.dataset.id;
                const type = delBtn.dataset.type;
                delBtn.disabled = true;
                
                if (type === 'client') {
                    if (State.session?.staff && !isStaffClient(id)) {
                        showToast('No tienes permiso para eliminar este cliente', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteClient(id)) renderRoute();
                } else if (type === 'service') {
                    if (State.session?.staff && !isStaffService(id)) {
                        showToast('No tienes permiso para eliminar este servicio', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteService(id)) renderRoute();
                } else if (type === 'salon') {
                    if (await deleteSalon(id)) renderRoute();
                } else {
                    if (State.session?.staff && !isStaffAppointment(id)) {
                        showToast('No tienes permiso para eliminar esta cita', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteAppointment(id)) renderRoute();
                }
            } else {
                delBtn.dataset.confirming = 'true';
                const originalHtml = delBtn.innerHTML;
                delBtn.innerHTML = '<span style="font-size:0.7rem">¿Borrar?</span>';
                delBtn.style.background = '#e67e22';
                delBtn.style.width = 'auto';
                delBtn.style.padding = '0 6px';
                
                setTimeout(() => {
                    if (delBtn && delBtn.dataset.confirming === 'true') {
                        delBtn.dataset.confirming = 'false';
                        delBtn.innerHTML = originalHtml;
                        delBtn.style.background = '';
                        delBtn.style.width = '';
                        delBtn.style.padding = '';
                    }
                }, 3000);
            }
            return;
        }

        // 2. Appointment Photo Delete
        const aptDelBtn = e.target.closest('.apt-photo-delete-btn');
        if (aptDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (aptDelBtn.dataset.confirming === 'true') {
                const photoId = aptDelBtn.dataset.photoId;
                const aptItem = aptDelBtn.closest('.apt-mini-photo');
                const aptId = aptItem?.dataset.aptId;
                
                if (aptId && photoId) {
                    const apt = State.appointments.find(a => a.id === aptId);
                    if (apt && apt.appointmentPhotos) {
                        const photoToDelete = apt.appointmentPhotos.find(p => p.id === photoId);
                        apt.appointmentPhotos = apt.appointmentPhotos.filter(p => p.id !== photoId);
                        await supabase.from('appointments').update({ appointment_photos: apt.appointmentPhotos }).eq('id', aptId);
                        
                        if (photoToDelete && photoToDelete.clientPhotoId) {
                            await deleteClientPhoto(photoToDelete.clientPhotoId);
                        }
                        showToast('Foto eliminada');
                        renderRoute();
                    }
                }
            } else {
                aptDelBtn.dataset.confirming = 'true';
                aptDelBtn.textContent = '¿X?';
                aptDelBtn.style.background = '#e67e22';
                setTimeout(() => {
                    if (aptDelBtn && aptDelBtn.dataset.confirming === 'true') {
                        aptDelBtn.dataset.confirming = 'false';
                        aptDelBtn.textContent = '🗑️';
                        aptDelBtn.style.background = 'rgba(0,0,0,0.6)';
                    }
                }, 3000);
            }
            return;
        }

        // 3. Appointment Photo Edit
        const aptEditBtn = e.target.closest('.apt-photo-edit-btn');
        if (aptEditBtn) {
            e.stopPropagation();
            const photoId = aptEditBtn.dataset.photoId;
            const aptItem = aptEditBtn.closest('.apt-mini-photo');
            const aptId = aptItem?.dataset.aptId;
            const apt = State.appointments.find(a => a.id === aptId);
            const photo = apt?.appointmentPhotos?.find(p => p.id === photoId);
            if (photo && aptId) {
                window.editAptPhoto(photoId, aptId, photo.photo_date || '', photo.notes || '', photo.photo_type || 'before');
            }
            return;
        }

        // 4. Edit Buttons - Clients, Services, Salons, Appointments
        const editBtn = e.target.closest('.edit-btn') || e.target.closest('.edit-apt-btn');
        if (editBtn) {
            e.preventDefault();
            e.stopPropagation();
            const id = editBtn.dataset.id;
            const type = editBtn.dataset.type || 'appointment';
            
            if (id) {
                if (type === 'client') {
                    if (State.session?.staff && !isStaffClient(id)) {
                        showToast('No tienes permiso para editar este cliente', 'error');
                        return;
                    }
                    if (typeof editClient === 'function') editClient(id);
                } else if (type === 'service') {
                    if (State.session?.staff && !isStaffService(id)) {
                        showToast('No tienes permiso para editar este servicio', 'error');
                        return;
                    }
                    if (typeof editService === 'function') editService(id);
                } else if (type === 'salon') {
                    if (typeof editSalon === 'function') editSalon(id);
                } else {
                    if (State.session?.staff && !isStaffAppointment(id)) {
                        showToast('No tienes permiso para editar esta cita', 'error');
                        return;
                    }
                    if (typeof editAppointment === 'function') editAppointment(id);
                }
            }
            return;
        }

        // 5. Client Photo Delete (The one user reported)
        const clientDelBtn = e.target.closest('.client-photo-remove-btn');
        if (clientDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (clientDelBtn.dataset.confirming === 'true') {
                const photoId = clientDelBtn.dataset.id;
                clientDelBtn.disabled = true;
                clientDelBtn.textContent = '...';
                
                const success = await deleteClientPhoto(photoId);
                if (success) {
                    renderRoute(); 
                    if (typeof window.refreshCurrentClientPhotos === 'function') {
                        window.refreshCurrentClientPhotos();
                    }
                } else {
                    clientDelBtn.disabled = false;
                    clientDelBtn.dataset.confirming = 'false';
                    clientDelBtn.textContent = '🗑️';
                    clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                }
            } else {
                clientDelBtn.dataset.confirming = 'true';
                clientDelBtn.textContent = '¿Borrar?';
                clientDelBtn.style.background = '#e67e22';
                clientDelBtn.style.width = 'auto';
                
                setTimeout(() => {
                    if (clientDelBtn && clientDelBtn.dataset.confirming === 'true') {
                        clientDelBtn.dataset.confirming = 'false';
                        clientDelBtn.textContent = '🗑️';
                        clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                    }
                }, 3000);
            }
            return;
        }

        // 5. Client Photo Edit
        const clientEditBtn = e.target.closest('.client-photo-edit-btn');
        if (clientEditBtn) {
            e.stopPropagation();
            const photoId = clientEditBtn.dataset.photoId;
            const cid = window.currentModalClientId;
            if (photoId) window.editClientPhoto(photoId, cid, '', '', '');
            return;
        }
    });

    function showClientFormForDiagnosis() {
        const html = `
            <form id="client-form-diagnosis">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required placeholder="Ej: María García">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" placeholder="Ej: +34 600 123 456">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Ej: correo@ejemplo.com">
                </div>
                <div class="form-group">
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was">
                        <option value="true">Sí</option>
                        <option value="false" selected>No</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Crear y Continuar</button>
                </div>
            </form>`;

        openModal('Nuevo Cliente para Diagnóstico', html, () => {
            document.getElementById('client-form-diagnosis').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const clientId = generateId();
                const data = {
                    id: clientId,
                    name: fd.get('name'),
                    phone: fd.get('phone'),
                    email: fd.get('email'),
                    enviar_was: fd.get('enviar_was') === 'true',
                    observations: ''
                };

                const success = await addClient(data);
                if (success) {
                    closeModal();
                    await selectClientForDiagnosis(data);
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Crear y Continuar';
                }
            });
        });
    }

    async function selectClientForDiagnosis(client) {
        const selClient = document.getElementById('diagnosis-client-selection');
        const mainDiag = document.getElementById('diagnosis-main');
        if (!selClient || !mainDiag) {
            console.error('Elementos de diagnóstico no encontrados');
            return;
        }
        selClient.style.display = 'none';
        mainDiag.style.display = 'block';
        const nameEl = document.getElementById('selected-client-name');
        const phoneEl = document.getElementById('selected-client-phone');
        if (nameEl) nameEl.textContent = client.name;
        if (phoneEl) phoneEl.textContent = client.phone || '';
        diagnosisClientId = client.id;
        diagnosisClientName = client.name;

        sessionStorage.setItem('nymara_diagnosis_client_id', client.id);
        sessionStorage.setItem('nymara_diagnosis_client_name', client.name);
        
        showToast('Cliente ' + client.name + ' seleccionado para diagnóstico');
    }

    function initDiagnosisEvents() {
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('diag-file-input');
        const analyzeBtn = document.getElementById('analyze-btn');
        const resetBtn = document.getElementById('reset-btn');
        const cameraBtn = document.getElementById('camera-btn');
        
        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = 'var(--accent-color)'; });
            dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = 'var(--border-color)'; });
            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.style.borderColor = 'var(--border-color)';
                const file = e.dataTransfer.files[0];
                if (file) processDiagnosisFile(file);
            });
            fileInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) processDiagnosisFile(file);
});
        }
        
if (analyzeBtn) {
            analyzeBtn.onclick = () => {
                console.log('Analyze button clicked');
                runDiagnosisAnalysis();
            };
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.getElementById('preview-container').style.display = 'none';
                document.getElementById('action-buttons').style.display = 'none';
                document.getElementById('drop-zone').style.display = 'block';
                document.getElementById('colored-hair-toggle').style.display = 'none';
                currentDiagnosisImage = null;
                currentDiagnosisResults = null;
                diagnosisImage = null;
            });
        }
        
        if (cameraBtn) {
            cameraBtn.addEventListener('click', async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                    const video = document.getElementById('diag-video');
                    video.srcObject = stream;
                    document.getElementById('camera-container').style.display = 'block';
                    cameraBtn.style.display = 'none';
                    dropZone.style.display = 'none';
                    
                    document.getElementById('shutter-btn').addEventListener('click', () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0);
                        canvas.toBlob(blob => {
                            const file = new File([blob], 'camera_capture.jpg', { type: 'image/jpeg' });
                            processDiagnosisFile(file);
                            stream.getTracks().forEach(t => t.stop());
                            document.getElementById('camera-container').style.display = 'none';
                            cameraBtn.style.display = 'flex';
                            dropZone.style.display = 'block';
                        }, 'image/jpeg', 0.95);
                    });
                    
                    document.getElementById('cancel-camera-btn').addEventListener('click', () => {
                        stream.getTracks().forEach(t => t.stop());
                        document.getElementById('camera-container').style.display = 'none';
                        cameraBtn.style.display = 'flex';
                        dropZone.style.display = 'block';
                    });
                } catch (err) {
                    showToast('No se pudo acceder a la cámara', 'error');
                }
            });
        }
    }

    function processDiagnosisFile(file) {
        if (!file || !file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                currentDiagnosisImage = img;
                const preview = document.getElementById('diag-preview-img');
                if (preview) {
                    preview.src = e.target.result;
                    document.getElementById('preview-container').style.display = 'block';
                    document.getElementById('drop-zone').style.display = 'none';
                    document.getElementById('action-buttons').style.display = 'flex';
                    document.getElementById('colored-hair-toggle').style.display = 'flex';
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    async function runDiagnosisAnalysis() {
        console.log('runDiagnosisAnalysis called, currentDiagnosisImage:', !!currentDiagnosisImage);
        if (!currentDiagnosisImage) return;
        
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) analyzeBtn.disabled = true;

        const statusBadge = document.getElementById('status-badge');
        if (statusBadge) {
            statusBadge.textContent = 'Analizando tejidos...';
            statusBadge.style.background = '#f59e0b';
        }
        
        try {
            console.log('Starting diagnosis analysis...');
            
            // Validar imagen primero
            if (!validateDiagnosisImage(currentDiagnosisImage)) {
                console.log('Image validation failed');
                if (statusBadge) {
                    statusBadge.textContent = 'Imagen no válida';
                    statusBadge.style.background = '#ef4444';
                }
                alert('⚠️ Imagen no válida.\n\nLa foto debe ser una toma microscópica del cuero cabelludo.');
                if (analyzeBtn) analyzeBtn.disabled = false;
                return;
            }
            
            console.log('Running detection functions...');
            // Análisis real de la imagen
            const density = detectHairDensity(currentDiagnosisImage);
            console.log('Density:', density);
            const thickness = detectHairThickness(currentDiagnosisImage);
            console.log('Thickness:', thickness);
            const { hydration, sebumLevel, sebumLabel } = detectHydrationAndSebum(currentDiagnosisImage);
            console.log('Hydration:', hydration, 'Sebum:', sebumLevel, sebumLabel);
            const dandruffResult = detectDandruffLevel(currentDiagnosisImage);
            const dandruffValue = dandruffResult.value;
            const dandruffLabel = dandruffResult.label;
            console.log('Dandruff:', dandruffValue, dandruffLabel);
            
            document.getElementById('val-density').textContent = density;
            document.getElementById('val-thickness').textContent = thickness;
            document.getElementById('val-hydration').textContent = hydration + '%';
            document.getElementById('val-sebum').textContent = sebumLevel + ' (' + sebumLabel + ')';
            document.getElementById('val-dandruff').textContent = dandruffValue + ' (' + dandruffLabel + ')';
            
            const isColored = document.getElementById('colored-hair-checkbox')?.checked || false;
            const diagnosis = { density, thickness, hydration: parseInt(hydration), sebum: parseInt(sebumLevel) || 5, isColored };
            
            displayDiagnosisProducts(getMariaNilaRecommendations(diagnosis));
            displayDiagnosisTreatments(getOlaplexRecommendations(diagnosis));
            
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
            // Guardar resultados para usar al guardar
            currentDiagnosisResults = { density, thickness, hydration, sebumLevel, sebumLabel, dandruffValue, dandruffLabel, isColored };
        } catch (err) {
            console.error('ERROR in diagnosis:', err);
            console.warn('Análisis completado con advertencias');
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
        } finally {
            console.log('Finally block - re-enabling button');
            if (analyzeBtn) analyzeBtn.disabled = false;
        }
    }

    function validateDiagnosisImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 150; 
        canvas.width = size; canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        
        const n = data.length / 4;
        const grays = new Float32Array(n);
        let rSum = 0, gSum = 0, bSum = 0;
        
        for (let i = 0; i < n; i++) {
            const r = data[i*4], g = data[i*4+1], b = data[i*4+2];
            rSum += r; gSum += g; bSum += b;
            grays[i] = 0.299 * r + 0.587 * g + 0.114 * b;
        }
        
        const rAvg = rSum / n, gAvg = gSum / n, bAvg = bSum / n;
        
        // 1. Filtro Biológico (Color del cuero cabelludo/piel)
        // El cuero cabelludo es predominantemente cálido (R > G > B o R > G ~= B)
        // Rechazar si hay exceso de Azul o Verde (fotos de paisajes, objetos artificiales)
        const isBiologicalColor = (rAvg > gAvg) && (rAvg > bAvg - 10) && (rAvg > 40);
        
        // 2. Filtro de Artificialidad (Colores demasiado saturados o planos)
        const avgGray = grays.reduce((a, b) => a + b, 0) / n;
        let variance = 0;
        for (let i = 0; i < n; i++) {
            variance += (grays[i] - avgGray) * (grays[i] - avgGray);
        }
        variance /= n;
        
        // 3. Filtro Microscópico (Textura y Bordes)
        let weakEdges = 0;
        let strongEdges = 0;
        for (let y = 0; y < size - 1; y++) {
            for (let x = 0; x < size - 1; x++) {
                const idx = y * size + x;
                const diffX = Math.abs(grays[idx] - grays[idx + 1]);
                const diffY = Math.abs(grays[idx] - grays[idx + size]);
                const maxDiff = Math.max(diffX, diffY);
                if (maxDiff > 15) weakEdges++;
                if (maxDiff > 40) strongEdges++;
            }
        }
        
        const weakEdgeDensity = weakEdges / (size * size);
        const strongEdgeDensity = strongEdges / (size * size);
        
        // Criterios Refinados:
        const isUniform = variance < 120; // Imágenes demasiado planas (fondos, capturas)
        const lacksTexture = weakEdgeDensity < 0.05; // Sin detalle microscópico
        const lacksMicroDetail = strongEdgeDensity < 0.015; // Sin pelos o poros definidos
        const tooMuchComplexity = weakEdgeDensity > 0.40; // Demasiado ruido (no es micro)
        const isTooDarkOrBright = (avgGray < 15) || (avgGray > 240);

        // Validación final
        return isBiologicalColor && !isUniform && !lacksTexture && !lacksMicroDetail && !tooMuchComplexity && !isTooDarkOrBright;
    }

    function detectHairDensity(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let hairPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Detectar cabello (oscuro con cierta saturación)
            if (brightness < 100 && saturation > 0.1 && saturation < 0.5) {
                hairPixels++;
            }
        }
        
        const density = Math.floor((hairPixels / totalPixels) * 300 + 100);
        return Math.min(280, Math.max(80, density));
    }

    function detectHairThickness(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let darkPixels = 0;
        let totalDarkPixels = 0;
        
        for (let y = 0; y < 80; y++) {
            for (let x = 0; x < 80; x++) {
                const i = (y * 80 + x) * 4;
                const r = data[i], g = data[i+1], b = data[i+2];
                const brightness = (r + g + b) / 3;
                
                if (brightness < 80) {
                    darkPixels++;
                    // Contar transiciones blanco-oscuro para estimar grosor
                    if (x > 0) {
                        const prevI = (y * 80 + (x-1)) * 4;
                        const prevBright = (data[prevI] + data[prevI+1] + data[prevI+2]) / 3;
                        if ((brightness < 80 && prevBright >= 80) || (brightness >= 80 && prevBright < 80)) {
                            totalDarkPixels++;
                        }
                    }
                }
            }
        }
        
        // Grosor basado en transiciones (más transiciones = cabello más fino)
        const thickness = Math.floor(90 - (totalDarkPixels / 20));
        return Math.min(120, Math.max(40, thickness));
    }

    function detectHydrationAndSebum(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let shinyPixels = 0;
        let dryPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Piel brillante = exceso de sebo
            if (brightness > 180 && saturation < 0.2 && r > 150 && g > 150 && b > 150) {
                shinyPixels++;
            }
            // Piel mate/sin brillo = seca
            if (brightness < 100 && saturation < 0.3) {
                dryPixels++;
            }
        }
        
        const shinyRatio = shinyPixels / totalPixels;
        const dryRatio = dryPixels / totalPixels;
        
        // Calcular nivel de sebo de 0 a 10
        let sebumValue = 5; // Normal base
        if (shinyRatio > 0.28) { // +30% sensibilidad
            sebumValue = 8 + Math.floor(shinyRatio * 10); // 8-10 Alto
        } else if (dryRatio > 0.35) { // +30% sensibilidad
            sebumValue = 2 + Math.floor(dryRatio * 10); // 0-3 Normal bajo
        } else {
            sebumValue = 4 + Math.floor(Math.random() * 3); // 4-6 Normal medio
        }
        sebumValue = Math.min(10, Math.max(0, sebumValue));
        
        // Determinar etiqueta según rango
        let sebumLabel;
        if (sebumValue < 3) sebumLabel = 'Normal';
        else if (sebumValue < 7) sebumLabel = 'Medio';
        else sebumLabel = 'Alto';
        
        // Hidratación basada en sebo
        let hydration;
        if (sebumValue >= 7) hydration = Math.floor(40 + Math.random() * 20);
        else if (sebumValue < 3) hydration = Math.floor(30 + Math.random() * 25);
        else hydration = Math.floor(50 + Math.random() * 20);
        
        return { hydration, sebumLevel: sebumValue, sebumLabel };
    }

    function detectErythemaLevel(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let erythemaPixels = 0;
        let skinPixels = 0;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            
            // Detectar piel (tonos rojizos/amarillentos típicos de piel)
            const isSkinTone = r > 95 && g > 40 && b > 20 && r > b && r > g * 0.8;
            if (isSkinTone) skinPixels++;
            
            // Eritema: rojez (rojo significativamente mayor que verde y azul)
            if (r > g + 30 && r > b + 30 && r > 120) {
                erythemaPixels++;
            }
        }
        
        if (skinPixels === 0) return 0;
        const erythemaRatio = erythemaPixels / skinPixels;
        let erythemaValue = Math.round(erythemaRatio * 10);
        console.log('Eritema detection:', { erythemaPixels, skinPixels, erythemaRatio, erythemaValue });
        return Math.min(10, Math.max(0, erythemaValue));
    }

    function detectDandruffLevel(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let dandruffPixels = 0;
        let skinPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const maxChannel = Math.max(r, g, b);
            const minChannel = Math.min(r, g, b);
            const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;
            
            const hasRed = r > g && r > b;
            const isSkinTone = r > 100 && g > 80 && b > 50 && saturation < 0.4 && hasRed;
            
            if (isSkinTone) skinPixels++;
            
            const isDandruff = brightness > 252 && saturation < 0.03 && (maxChannel - minChannel) > 100 && !isSkinTone; // -80% sensibilidad total
            if (isDandruff) dandruffPixels++;
        }
        
        const dandruffRatio = (dandruffPixels / totalPixels) * 100;
        let dandruffValue = Math.round(dandruffRatio * 0.14); // -93% sensibilidad total
        dandruffValue = Math.min(10, Math.max(0, dandruffValue));
        
        // Determinar etiqueta según rango
        let dandruffLabel;
        if (dandruffValue < 3) dandruffLabel = 'Normal';
        else if (dandruffValue < 7) dandruffLabel = 'Medio';
        else dandruffLabel = 'Alto';
        
        return { value: dandruffValue, label: dandruffLabel };
    }

window.addEventListener('message', async (event) => {
        if (event.data && event.data.type === 'diagnosis_photo') {
            try {
                const clientId = sessionStorage.getItem('nymara_diagnosis_client_id');
                const clientName = sessionStorage.getItem('nymara_diagnosis_client_name');
                const results = event.data.results;
                const photoData = event.data.photoData;
                
                console.log('DEBUG: Parent received diagnosis_photo message:', { clientId, clientName, results, hasPhoto: !!photoData });
                showToast(`Análisis completado para ${clientName || 'Cliente'}`);
                
                // Guardar foto si existe
                if (photoData && clientId) {
                    try {
                        const base64Data = photoData.replace(/^data:image\/\w+;base64,/, '');
                        const binaryString = atob(base64Data);
                        const bytes = new Uint8Array(binaryString.length);
                        for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
                        const blob = new Blob([bytes], { type: 'image/jpeg' });
                        
                        const fileName = `${clientId}/diagnosis_${Date.now()}.jpg`;
                        const { data, error } = await supabase.storage
                            .from('client-photos')
                            .upload(fileName, blob);
                        
                        if (error) {
                            console.error('Error uploading diagnosis photo:', error);
                        } else {
                            const { data: { publicUrl } } = supabase.storage
                                .from('client-photos')
                                .getPublicUrl(fileName);
                            
                            const photoId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                                const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                                return v.toString(16);
                            });
                            
                            await supabase.from('client_photos').insert({
                                id: photoId,
                                client_id: clientId,
                                photo_url: publicUrl,
                                photo_date: new Date().toISOString().split('T')[0],
                                photo_type: 'antes',
                                notes: `Densidad: ${results?.density || '--'}, Grosor: ${results?.thickness || '--'}, Hidratación: ${results?.hydration || '--'}%, Sebo: ${results?.sebum || '--'}, Caspa: ${results?.dandruff || '--'}`
                            });
                            
                            console.log('Diagnosis photo saved:', publicUrl);
                            showToast('✓ Foto de diagnóstico guardada');
                              
                            // Notify diagnosis iframe that photo was saved
                            const diagnosisFrame = document.querySelector('iframe[src*="diagnosis"]');
                            if (diagnosisFrame) {
                                diagnosisFrame.contentWindow.postMessage({
                                    type: 'diagnosis_photo_saved'
                                }, '*');
                            }
                        }
                    } catch (e) {
                        console.error('Error saving diagnosis photo:', e);
                    }
                }
                
                // Mostrar recomendaciones en la app principal
                if (results) {
                    const diagnosis = {
                        density: results.density || 150,
                        thickness: results.thickness || 65,
                        hydration: parseInt(results.hydration) || 55,
                        sebum: parseInt(results.sebum) || 5,
                        isColored: results.isColored || false
                    };
                    const products = getMariaNilaRecommendations(diagnosis);
                    const treatments = getOlaplexRecommendations(diagnosis);
                    displayDiagnosisProducts(products);
                    displayDiagnosisTreatments(treatments);
                }
            } catch (e) {
                console.error('Error handling diagnosis_photo message:', e);
            }
        }
    });

    /* ═══════════════════════════════════════
       FORMS (now async submit handlers)
       ═══════════════════════════════════════ */
    function showClientForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="client-form">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" value="${isEdit ? info.phone : ''}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${isEdit ? info.email : ''}">
                </div>
                <div class="form-group">
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was" id="enviar-was-select" onchange="toggleWATemplate()">
                        <option value="true" ${isEdit && (info.enviar_was === true || info.enviar_was === 'true' || info.enviar_was === 1) ? 'selected' : ''}>Sí</option>
                        <option value="false" ${!isEdit || (info.enviar_was === false || info.enviar_was === 'false' || info.enviar_was === 0 || info.enviar_was === null) ? 'selected' : ''}>No</option>
                    </select>
                </div>
                <div class="form-group" id="wa-template-group" style="${isEdit && (info.enviar_was === true || info.enviar_was === 'true' || info.enviar_was === 1) ? '' : 'display:none'}">
                    <label>Plantilla de mensaje WhatsApp</label>
                    <div style="display:flex;gap:4px;margin-bottom:6px;flex-wrap:wrap;">
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{cliente}')">+ Cliente</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{salon}')">+ Salón</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{servicio}')">+ Servicio</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{fecha}')">+ Fecha</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{hora}')">+ Hora</button>
                    </div>
                    <textarea class="form-control" id="wa-template-textarea" name="whatsapp_template" rows="3" placeholder="Escribe tu plantilla...">${isEdit ? (info.whatsapp_template || DEFAULT_WA_TEMPLATE) : DEFAULT_WA_TEMPLATE}</textarea>
                </div>
                <div class="form-group">
                    <label>Observaciones</label>
                    <textarea class="form-control" name="observations" rows="3" placeholder="Notas sobre el cliente...">${isEdit ? (info.observations || '') : ''}</textarea>
                </div>
                ${isEdit ? `
                <div class="form-group">
                    <label>Fotos del Cliente</label>
                    <div id="client-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <div style="display:flex;gap:8px;margin-bottom:8px" id="photos-buttons-container">
                        <button type="button" class="btn btn-sm btn-secondary" id="btn-add-client-photo">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                            Añadir Foto
                        </button>
                    </div>
                    <input type="file" id="client-photo-input" accept="image/*" style="display:none">
                </div>
                ` : ''}
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cliente' : 'Nuevo Cliente', html, async () => {
            let currentClientId = isEdit ? info.id : generateId();
            window.currentModalClientId = currentClientId;
            let sessionPhotos = [];
            let pendingFiles = [];
            const renderPhotos = () => {
                const container = document.getElementById('client-photos-list');
                if (!container) return;
                
                let html = '';
                sessionPhotos.forEach((p, idx) => {
                    const photoType = (p.photo_type === 'after') ? 'Después' : (p.photo_type === 'diagnosis' ? 'Diagnóstico' : 'Antes');
                    html += `
                        <div class="client-mini-photo" data-photo-id="${p.id}" style="position:relative;text-align:center">
                            <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${p.photo_date || ''}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="client-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:24px;height:24px;cursor:pointer;font-size:12px;opacity:0.9">✏️</button>
                                <button type="button" class="client-photo-remove-btn" data-id="${p.id}" title="Eliminar" style="background:rgba(220,53,69,0.8);color:white;border:none;border-radius:4px;min-width:24px;height:24px;padding:0 4px;cursor:pointer;font-size:12px;opacity:0.9;transition:all 0.2s">🗑️</button>
                            </div>
                        </div>`;
                });
                
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="position:relative;text-align:center">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">Antes</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${toLocalDateStr(new Date())}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="delete-pending-btn" data-idx="${idx}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                            </div>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            console.log('Client form opened, isEdit:', isEdit, 'info:', info);
            if (isEdit && info?.id) {
                console.log('Loading photos for client:', info.id);
                sessionPhotos = await loadClientPhotos(info.id) || [];
                console.log('sessionPhotos loaded:', sessionPhotos);
                renderPhotos();
            }

            // Agregar botón de borrar duplicados dinámicamente
            if (isEdit) {
                const buttonsContainer = document.getElementById('photos-buttons-container');
                if (buttonsContainer && !document.getElementById('btn-dedup-photos')) {
                    const dedupBtn = document.createElement('button');
                    dedupBtn.type = 'button';
                    dedupBtn.id = 'btn-dedup-photos';
                    dedupBtn.className = 'btn btn-sm';
                    dedupBtn.style.cssText = 'background:#dc3545;color:white;border:none;padding:5px 10px;border-radius:4px;margin-left:8px';
                    dedupBtn.innerHTML = '🗑️ Borrar Duplicados';
                    buttonsContainer.appendChild(dedupBtn);
                    
                    dedupBtn.addEventListener('click', async () => {
                        if (!sessionPhotos.length) {
                            showToast('No hay fotos para revisar', 'warning');
                            return;
                        }
                        
                        showToast('Buscando fotos duplicadas...', 'info');
                        console.log('Processing photos for duplicates:', sessionPhotos);
                        
                        // Calcular hash para cada foto existente
                        const photoHashes = new Map(); // hash -> photo
                        const toDelete = [];
                        
                        for (const p of sessionPhotos) {
                            let hash = p.photo_hash;
                            
                            // Si no tiene hash, calcularlo descargando la imagen
                            if (!hash && p.photo_url) {
                                try {
                                    showToast(`Calculando hash para foto ${p.id}...`, 'info');
                                    const response = await fetch(p.photo_url);
                                    const blob = await response.blob();
                                    const buffer = await blob.arrayBuffer();
                                    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                                    hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                                    
                                    // Guardar el hash en la BD para futuras comparaciones
                                    await updateClientPhoto(p.id, currentClientId, { photo_hash: hash });
                                    console.log(`Hash calculated and saved for ${p.id}:`, hash);
                                } catch (err) {
                                    console.error('Error calculating hash for photo:', p.id, err);
                                    continue;
                                }
                            }
                            
                            if (!hash) continue;
                            
                            if (photoHashes.has(hash)) {
                                console.log('Duplicate found:', p.id, 'matches:', photoHashes.get(hash).id);
                                toDelete.push(p.id);
                            } else {
                                photoHashes.set(hash, p);
                            }
                        }
                        
                        console.log('To delete:', toDelete);
                        
                        if (!toDelete.length) {
                            showToast('No se encontraron fotos duplicadas', 'info');
                            return;
                        }
                        
                        if (!confirm(`Se encontraron ${toDelete.length} foto(s) duplicada(s). ¿Eliminarlas?`)) return;
                        
                        for (const photoId of toDelete) {
                            await deleteClientPhoto(photoId, currentClientId);
                        }
                        
                        sessionPhotos = sessionPhotos.filter(p => !toDelete.includes(p.id));
                        renderPhotos();
                        showToast(`${toDelete.length} foto(s) duplicada(s) eliminada(s)`);
                    });
                }
            }

            const btnAddPhoto = document.getElementById('btn-add-client-photo');
            const photoInput = document.getElementById('client-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        const img = new Image();
                        img.onload = () => {
                            // Run diagnosis
                            const dandruffResult = detectDandruffLevel(img);
                            const { sebumLevel } = detectHydrationAndSebum(img);
                            const erythemaResult = detectErythemaLevel(img);
                            
                            console.log('Diagnosis results:', { dandruffResult, sebumLevel, erythemaResult });
                            
                            pendingFiles.push({ 
                                file, 
                                preview: ev.target.result,
                                caspa: dandruffResult,
                                sebo: sebumLevel,
                                eritema: erythemaResult
                            });
                            renderPhotos();
                        };
                        img.src = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('client-photos-list');
            if (photosList) {
                // Using global delegation for deletion now, but keeping local logic for pending files
                photosList.addEventListener('click', async e => {
                    const delPending = e.target.closest('.delete-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        pendingFiles.splice(idx, 1);
                        renderPhotos();
                        return;
                    }
                });
                
                // Expose refresh function for global listener
                window.refreshCurrentClientPhotos = async () => {
                    sessionPhotos = await loadClientPhotos(currentClientId) || [];
                    renderPhotos();
                };
                
                photosList.addEventListener('change', async e => {
                    const select = e.target;
                    if (select.tagName === 'SELECT' && select.dataset.id) {
                        const photoId = select.dataset.id;
                        const field = select.dataset.field;
                        const value = select.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                    const input = e.target;
                    if (input.tagName === 'INPUT' && input.dataset.id && input.type !== 'file') {
                        const photoId = input.dataset.id;
                        const field = input.dataset.field;
                        const value = input.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                });
            }

            document.getElementById('client-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const enviarWas = fd.get('enviar_was') === 'true';
                const data = { 
                    id: currentClientId, 
                    name: fd.get('name'), 
                    phone: fd.get('phone'), 
                    email: fd.get('email'),
                    enviar_was: enviarWas,
                    whatsapp_template: enviarWas ? fd.get('whatsapp_template') : null,
                    observations: fd.get('observations')
                };

                let success;
                if (isEdit) success = await updateClient(data);
                else success = await addClient(data);

                if (success && pendingFiles.length > 0) {
                    for (const pf of pendingFiles) {
                        const idx = pendingFiles.indexOf(pf);
                        const typeSelect = document.querySelector(`.pending-type[data-idx="${idx}"]`);
                        const dateInput = document.querySelector(`.pending-date[data-idx="${idx}"]`);
                        const notesInput = document.querySelector(`.pending-notes[data-idx="${idx}"]`);
                        await uploadClientPhoto(
                            pf.file, 
                            currentClientId, 
                            dateInput?.value || toLocalDateStr(new Date()),
                            typeSelect?.value || 'before',
                            notesInput?.value || '',
                            pf.caspa || null,
                            pf.sebo || null,
                            pf.eritema || null
                        );
                    }
                    showToast('Fotos guardadas');
                }

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
}

    function showServiceForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="service-form">
                <div class="form-group">
                    <label>Nombre del Servicio</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Duración (minutos)</label>
                    <input type="number" class="form-control" name="duration" min="5" step="5" required value="${isEdit ? info.duration : '30'}">
                </div>
                <div class="form-group">
                    <label>Precio (€)</label>
                    <input type="number" class="form-control" name="price" min="0" step="0.01" required value="${isEdit ? info.price : '0'}">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Servicio' : 'Nuevo Servicio', html, () => {
            document.getElementById('service-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = { id: isEdit ? info.id : generateId(), name: fd.get('name'), duration: parseInt(fd.get('duration')), price: parseFloat(fd.get('price')) };

                let success;
                if (isEdit) success = await updateService(data);
                else success = await addService(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
    }

    function showSettingsForm() {
        const accounts = getStaffAccounts();
        const staffList = accounts.length > 0 ? accounts.map((acc, i) => `
            <div class="staff-entry" data-staff-id="${acc.id}" style="background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;margin-bottom:0.75rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                    <strong style="font-size:0.95rem;">${acc.name}</strong>
                    <button type="button" class="btn btn-danger btn-sm" onclick="removeStaffAccount('${acc.id}')" style="padding:0.25rem 0.6rem;font-size:0.75rem;">Eliminar</button>
                </div>
                <div style="font-size:0.85rem;color:var(--text-secondary);">Salón: ${State.salons.find(s => s.id === acc.salonId)?.name || '—'}</div>
            </div>
        `).join('') : '<p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">No hay usuarios staff configurados.</p>';

        const salonOptions = State.salons.map(s => `<option value="${s.id}">${s.name}</option>`).join('');

        const html = `
            <form id="settings-form">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Configuración</h3>
                <div class="form-group">
                    <label>Hora de Apertura</label>
                    <input type="time" class="form-control" name="startTime" required value="${State.settings.startTime}">
                </div>
                <div class="form-group">
                    <label>Hora de Cierre</label>
                    <input type="time" class="form-control" name="endTime" required value="${State.settings.endTime}">
                </div>
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Acceso Staff</h3>
                <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">Crea usuarios y contraseñas para que el staff pueda acceder. Cada usuario se asigna a un salón.</p>
                
                <div id="staff-list" style="margin-bottom:1rem;">
                    ${staffList}
                </div>

                <div style="background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;">
                    <h4 style="font-size:0.95rem;margin-bottom:0.75rem;">Nuevo usuario staff</h4>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" id="new-staff-name" placeholder="Nombre del empleado">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="text" class="form-control" id="new-staff-password" placeholder="Contraseña">
                    </div>
                    <div class="form-group">
                        <label>Salón</label>
                        <select class="form-control" id="new-staff-salon">
                            ${salonOptions}
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addStaffFromSettings()" style="margin-top:0.25rem;">Añadir Staff</button>
                </div>
                <div style="margin-top:1rem;font-size:0.8rem;color:var(--text-secondary);">
                    <strong>Nota:</strong> Los cambios en el staff se guardan automáticamente al añadir o eliminar.
                </div>
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cerrar</button>
                    <button type="submit" class="btn btn-primary">Guardar Horario</button>
                </div>
            </form>`;

        openModal('Configuración', html, () => {
            document.getElementById('settings-form').addEventListener('submit', e => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const start = fd.get('startTime');
                const end = fd.get('endTime');

                if (start >= end) {
                    showToast('La hora de cierre debe ser posterior a la de apertura.', 'error');
                    return;
                }

                State.settings.startTime = start;
                State.settings.endTime = end;
                localStorage.setItem('nymara_start_time', start);
                localStorage.setItem('nymara_end_time', end);

                showToast('Horario actualizado correctamente.');
                closeModal();
            });
        });
    }

    window.addStaffFromSettings = function() {
        const name = document.getElementById('new-staff-name').value.trim();
        const password = document.getElementById('new-staff-password').value.trim();
        const salonId = document.getElementById('new-staff-salon').value;

        if (!name || !password) {
            showToast('Debes introducir nombre y contraseña.', 'error');
            return;
        }

        const accounts = getStaffAccounts();
        if (accounts.some(a => a.name === name)) {
            showToast('Ya existe un usuario staff con ese nombre.', 'error');
            return;
        }

        // Save the admin email alongside staff accounts
        const adminEmail = State.currentUserEmail || '';
        localStorage.setItem('nymara_staff_admin_email', adminEmail);

        saveStaffAccount({
            id: generateId(),
            name,
            password,
            salonId,
            adminEmail
        });

        showToast('Usuario staff añadido correctamente.');
        closeModal();
        showSettingsForm();
    };

    window.removeStaffAccount = function(id) {
        if (!confirm('¿Eliminar este usuario staff?')) return;
        deleteStaffAccount(id);
        showToast('Usuario staff eliminado.');
        closeModal();
        showSettingsForm();
    };

    function findNextAvailableTime(dateStr, durationMinutes) {
        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        
        let startMins = startH * 60 + startM;
        const endMins = endH * 60 + endM;

        const dayApts = State.appointments
            .filter(a => a.date === dateStr)
            .sort((a, b) => a.time.localeCompare(b.time));

        for (const apt of dayApts) {
            const [h, m] = apt.time.split(':').map(Number);
            const aptStart = h * 60 + m;
            const aptServ = State.services.find(s => s.id === apt.serviceId);
            const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
            const aptEnd = aptStart + aptDur;

            if (startMins + durationMinutes <= aptStart) {
                break;
            }
            if (startMins < aptEnd) {
                startMins = aptEnd;
            }
        }

        if (startMins + durationMinutes > endMins) return State.settings.startTime; // fallback if no time
        const hStr = Math.floor(startMins / 60).toString().padStart(2, '0');
        const mStr = (startMins % 60).toString().padStart(2, '0');
        return `${hStr}:${mStr}`;
    }

    function showAppointmentForm(apt = null) {
        if (State.clients.length === 0 || State.services.length === 0) {
            showToast('Debes tener al menos un cliente y un servicio antes de agendar una cita.', 'error');
            return;
        }

        const isEdit = apt !== null;
        const defaultDate = isEdit ? apt.date : (State.selectedDate || toLocalDateStr(new Date()));
        const defaultTime = isEdit ? apt.time : findNextAvailableTime(defaultDate, State.services.length > 0 ? parseInt(State.services[0].duration) : 30);

        const userColor = State.currentUserColor || '#6366f1';
        const html = `
            <form id="appointment-form">
                <div class="form-user-badge" style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;padding:0.5rem;background:rgba(0,0,0,0.03);border-radius:8px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:${userColor};flex-shrink:0;"></div>
                    <span style="font-size:0.8rem;color:var(--text-secondary);">${isEdit ? 'Editando cita' : 'Creando cita'} como <strong>${State.currentUserEmail || 'usuario'}</strong></span>
                </div>
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" name="clientId" required>
                        ${State.clients.map(c => `<option value="${c.id}" ${isEdit && c.id === apt.clientId ? 'selected' : ''}>${c.name}</option>`).join('')}
                    </select>
                    <div id="client-info" style="margin-top:6px;font-size:0.8rem;color:var(--text-secondary);display:none">
                        <span id="client-phone"></span>
                        <span id="client-email" style="margin-left:10px"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Servicio</label>
                    <select class="form-control" name="serviceId" required>
                        ${State.services.map(s => `<option value="${s.id}" ${isEdit && s.id === apt.serviceId ? 'selected' : ''}>${s.name} (${s.duration} min · ${parseFloat(s.price).toFixed(2)}€)</option>`).join('')}
                    </select>
                </div>
                ${(State.activeSalonId === 'all' || !State.activeSalonId || !State.salons.some(s => s.id === State.activeSalonId)) ? `
                <div class="form-group">
                    <label>Salón</label>
                    <select class="form-control" name="salonId" required>
                        ${State.salons.length === 0 ? '<option value="">No hay salones disponibles</option>' : State.salons.map(s => `<option value="${s.id}" ${isEdit && s.id === apt.salonId ? 'selected' : ''}>${s.name}</option>`).join('')}
                    </select>
                </div>
                ` : `<input type="hidden" name="salonId" value="${State.activeSalonId}">`}
                <div style="display:flex;gap:1rem">
                    <div class="form-group" style="flex:1">
                        <label>Fecha</label>
                        <input type="date" class="form-control" name="date" required value="${defaultDate}">
                    </div>
                    <div class="form-group" style="flex:1">
                        <label>Hora</label>
                        <input type="time" class="form-control" name="time" required value="${defaultTime}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Notas (opcional)</label>
                    <textarea class="form-control" name="notes" rows="2" placeholder="Información adicional...">${isEdit ? apt.notes || '' : ''}</textarea>
                </div>
                
                <div class="form-group">
                    <label>Fotos de la Cita</label>
                    <div id="apt-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <button type="button" class="btn btn-sm btn-secondary" id="btn-add-apt-photo" style="display:inline-flex">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right:5px"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Foto
                    </button>
                    <input type="file" id="apt-photo-input" accept="image/*" style="display:none">
                </div>
                
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar Cambios' : 'Agendar Cita'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cita' : 'Nueva Cita', html, () => {
            const form = document.getElementById('appointment-form');
            const dateInput = form.querySelector('[name="date"]');
            const timeInput = form.querySelector('[name="time"]');
            const serviceSelect = form.querySelector('[name="serviceId"]');
            
            let pendingFiles = [];
            let existingPhotos = isEdit ? [...apt.appointmentPhotos] : [];

            const renderAptPhotos = () => {
                const container = document.getElementById('apt-photos-list');
                if (!container) return;
                
                let html = '';
                // Existing photos
                existingPhotos.forEach((p, idx) => {
                    const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                    html += `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid var(--accent-color)" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <span style="font-size:0.6rem;color:var(--text-secondary)">${photoType}</span>
                            <button type="button" class="delete-existing-apt-photo-btn" data-idx="${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>`;
                });
                
                // Pending files
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;opacity:0.7" onclick="openModal('Foto','<img src=${pf.preview} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <span style="font-size:0.6rem;color:var(--text-secondary)">Pendiente</span>
                            <button type="button" class="delete-apt-pending-btn" data-idx="${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            const btnAddPhoto = document.getElementById('btn-add-apt-photo');
            const photoInput = document.getElementById('apt-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        pendingFiles.push({ file, preview: ev.target.result, type: 'before', date: toLocalDateStr(new Date()), notes: '' });
                        renderAptPhotos();
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('apt-photos-list');
            if (photosList) {
                photosList.addEventListener('click', e => {
                    const delPending = e.target.closest('.delete-apt-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        pendingFiles.splice(idx, 1);
                        renderAptPhotos();
                        return;
                    }
                    const delExisting = e.target.closest('.delete-existing-apt-photo-btn');
                    if (delExisting) {
                        const idx = parseInt(delExisting.dataset.idx);
                        existingPhotos.splice(idx, 1);
                        renderAptPhotos();
                    }
                });
            }

            form.querySelectorAll('.form-control').forEach(input => {
                input.style.borderColor = userColor;
                input.style.setProperty('caret-color', userColor);
            });

            function updateSuggestion() {
                const selDate = dateInput.value;
                const selService = State.services.find(s => s.id === serviceSelect.value);
                const dur = selService ? parseInt(selService.duration) : 30;
                timeInput.value = findNextAvailableTime(selDate, dur);
            }

            renderAptPhotos(); // Initial render

            dateInput.addEventListener('change', updateSuggestion);
            serviceSelect.addEventListener('change', updateSuggestion);

            form.addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = apt ? 'Guardando…' : 'Agendando…';

                const fd = new FormData(e.target);
                const appointmentId = apt ? apt.id : generateId();
                const data = {
                    id: appointmentId,
                    clientId: fd.get('clientId'),
                    serviceId: fd.get('serviceId'),
                    salonId: fd.get('salonId') || State.activeSalonId || (State.salons.length > 0 ? State.salons[0].id : null),
                    date: fd.get('date'),
                    time: fd.get('time'),
                    notes: fd.get('notes'),
                    userEmail: State.currentUserEmail || '',
                    appointmentPhotos: existingPhotos
                };
                
                if (data.salonId === 'all' || !State.salons.some(s => s.id === data.salonId)) {
                    showToast('Por favor, selecciona un salón válido para la cita.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                if (!State.salons.some(s => s.id === data.salonId)) {
                    showToast('El salón seleccionado no existe. Selecciona otro.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                // Validar que no se solape con otra cita existente en el mismo día
                const [targetHour, targetMin] = data.time.split(':').map(Number);
                const targetStartMinutes = targetHour * 60 + targetMin;
                const targetService = State.services.find(s => s.id === data.serviceId);
                const targetEndMinutes = targetStartMinutes + (targetService ? parseInt(targetService.duration) : 0);

                const [startH, startM] = State.settings.startTime.split(':').map(Number);
                const [endH, endM] = State.settings.endTime.split(':').map(Number);
                const workingStartMins = startH * 60 + startM;
                const workingEndMins = endH * 60 + endM;

                if (targetStartMinutes < workingStartMins || targetEndMinutes > workingEndMins) {
                    showToast(`El horario seleccionado se sale de tus horas de apertura (${State.settings.startTime} - ${State.settings.endTime}).`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                const hasCollision = State.appointments.some(a => {
                    if (isEdit && apt && a.id === apt.id) return false; // Skip self when editing
                    if (a.date !== data.date) return false;
                    if (a.salonId !== data.salonId) return false;
                    const [aptHour, aptMin] = a.time.split(':').map(Number);
                    const aptStartMinutes = aptHour * 60 + aptMin;
                    const aptService = State.services.find(s => s.id === a.serviceId);
                    const aptEndMinutes = aptStartMinutes + (aptService ? parseInt(aptService.duration) : 0);
                    return targetStartMinutes < aptEndMinutes && targetEndMinutes > aptStartMinutes;
                });

                if (hasCollision) {
                    showToast('El horario elegido choca con una cita ya existente.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                // Upload pending photos
                if (pendingFiles.length > 0) {
                    submitBtn.textContent = 'Subiendo fotos…';
                    for (const pf of pendingFiles) {
                        try {
                            const fileName = `appointments/${appointmentId}/${Date.now()}_${pf.file.name}`;
                            const { data: uploadData, error: uploadError } = await supabase.storage
                                .from('client-photos')
                                .upload(fileName, pf.file);
                            
                            if (uploadError) throw uploadError;
                            
                            const { data: { publicUrl } } = supabase.storage
                                .from('client-photos')
                                .getPublicUrl(fileName);
                            
                            const clientPhotoId = generateId();
                            const photoRecord = {
                                id: generateId(),
                                clientPhotoId: clientPhotoId, // Store the reference
                                photo_url: publicUrl,
                                photo_date: toLocalDateStr(new Date()),
                                photo_type: pf.type || 'before',
                                notes: pf.notes || ''
                            };
                            data.appointmentPhotos.push(photoRecord);

                            // TAMBIÉN subir a la base de datos del cliente (client_photos)
                            await supabase.from('client_photos').insert({
                                id: clientPhotoId,
                                client_id: data.clientId,
                                photo_url: publicUrl,
                                photo_date: photoRecord.photo_date,
                                photo_type: photoRecord.photo_type,
                                notes: `Cita ${data.date}: ${photoRecord.notes}`,
                                user_email: State.currentUserEmail
                            });
                        } catch (err) {
                            console.error('Error uploading photo:', err);
                            showToast('Error al subir una de las fotos', 'error');
                        }
                    }
                }

                if (isEdit) {
                    if (await updateAppointment(apt.id, data)) { 
                        closeModal(); 
                        renderRoute(); 
                    }
                } else {
                    data.id = generateId();
                    if (await addAppointment(data)) { 
                        if (State.session?.staff) addStaffAptId(data.id);
                        State.selectedDate = data.date;
                        closeModal(); 
                        renderRoute(); 
                        
                        // Notificar por WhatsApp si el cliente lo tiene activado
                        const client = State.clients.find(c => c.id === data.clientId);
                        if (client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1) && client.phone) {
                            const salon = State.salons.find(s => s.id === data.salonId);
                            const service = State.services.find(s => s.id === data.serviceId);
                            sendWASMessage(client.phone, client.name, data.date, data.time, client.whatsapp_template, salon?.name || '', service?.name || '');
                        }
                    }
                }
                submitBtn.disabled = false;
                submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
            });
        });
    }

    window.showAppointmentForm = showAppointmentForm;

    window.editAppointment = function(id) {
        const apt = State.appointments.find(a => a.id === id);
        if (apt) showAppointmentForm(apt);
    };

    // Wrapper functions for editing clients, services, and salons
    window.editClient = function(id) {
        const client = State.clients.find(c => c.id === id);
        if (client && typeof showClientForm === 'function') showClientForm(client);
    };

    window.editService = function(id) {
        const service = State.services.find(s => s.id === id);
        if (service && typeof showServiceForm === 'function') showServiceForm(service);
    };

    window.editSalon = function(id) {
        const salon = State.salons.find(s => s.id === id);
        if (salon && typeof showSalonForm === 'function') showSalonForm(salon);
    };

    /* ═══════════════════════════════════════
       DIAGNOSIS AUTO-SYNC
       ═══════════════════════════════════════ */
    window.addEventListener('message', async e => {
        if (e.data && e.data.type === 'diagnosis_photo') {
            const clientId = sessionStorage.getItem('nymara_diagnosis_client_id');
            const { photoData, results } = e.data;
            
            if (clientId && photoData) {
                console.log('Diagnosis message received. Syncing photo for client:', clientId);
                try {
                    // Convert base64 to blob
                    const base64Data = photoData.split(',')[1];
                    const blob = await fetch(`data:image/jpeg;base64,${base64Data}`).then(r => r.blob());
                    
                    const fileName = `diagnosis/${clientId}/${Date.now()}.jpg`;
                    const { data: uploadData, error: uploadError } = await supabase.storage
                        .from('client-photos')
                        .upload(fileName, blob);
                        
                    if (uploadError) throw uploadError;
                    
                    const { data: { publicUrl } } = supabase.storage
                        .from('client-photos')
                        .getPublicUrl(fileName);
                        
                    // Insert into client_photos
                    await supabase.from('client_photos').insert({
                        id: generateId(),
                        client_id: clientId,
                        photo_url: publicUrl,
                        photo_date: toLocalDateStr(new Date()),
                        photo_type: 'diagnosis',
                        notes: '', // Notas vacías como pidió el usuario
                        user_email: State.currentUserEmail
                    });
                    
                    showToast('Diagnóstico guardado en el historial del cliente');
                } catch (err) {
                    console.error('Error syncing diagnosis photo:', err);
                    showToast('Error al guardar el diagnóstico en el historial', 'error');
                }
            }
        }
    });

    /* ═══════════════════════════════════════
       INIT — Check session to start
       ═══════════════════════════════════════ */
    checkSession();

    // Combat aggressive browser autofill
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    
    if (emailInput && passwordInput) {
        // Clear again after a delay in case browser injected values late
        setTimeout(() => {
            emailInput.value = '';
            passwordInput.value = '';
            emailInput.readOnly = false;
            passwordInput.readOnly = false;
        }, 600);

        // Also remove readonly on focus as a fallback
        emailInput.addEventListener('focus', () => emailInput.readOnly = false);
passwordInput.addEventListener('focus', () => passwordInput.readOnly = false);
    }
});

