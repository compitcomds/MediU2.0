<template>
    <div >
        <div v-if="category==='skin'">
            {{ filterBarDataSkin }} 
        </div>  
        <div v-else-if="category ==='hair'">      
            {{ filterBarDataHair }}
        </div>
        <div v-else-if="category === 'babycare'">
            {{ filterBarDataBabycare }}
        </div>
        <div v-else>
            
             <div class="space-y-5">
            <!-- <ShopFilterBarCompCategories :category="allShopFilter.category" />
            <ShopFilterBarCompBrands :category="allShopFilter.brand" />
            <ShopFilterBarCompOtherfilter :category="allShopFilter.filter" /> -->
            <ShopFilterBarCompPrice/>
            <ShopFilterBarCompTags :tags="allShopFilter.tags" />
        </div>
        </div>
        
    </div>

</template>

<script setup>



const props = defineProps({
    category: {
    type: Object,
    required: true,
  },
});

const filterBarDataSkin = {
    brand: [
        "Neutrogena",
        "Olay",
        "CeraVe",
        "La Roche-Posay",
        "Eucerin"
    ],
    filter: [
        "Hydrating",
        "Anti-Aging",
        "Sensitive Skin",
        "Oil-Free",
        "Non-Comedogenic"
    ],
    tags: [
        "Cruelty-Free",
        "Fragrance-Free",
        "Organic",
        "Vegan",
        "Dermatologist-Tested"
    ],
    category: [
        "Cleansers",
        "Moisturizers",
        "Serums",
        "Sunscreens",
        "Face Masks"
    ]
};

const filterBarDataHair = {
    brand: [
        "Pantene",
        "Garnier",
        "Tresemmé",
        "Redken",
        "Matrix"
    ],
    filter: [
        "Hydrating",
        "Volume",
        "Color Protection",
        "Frizz Control",
        "Repair"
    ],
    tags: [
        "Sulfate-Free",
        "Paraben-Free",
        "Cruelty-Free",
        "Organic",
        "For Curly Hair"
    ],
    category: [
        "Shampoos",
        "Conditioners",
        "Hair Treatments",
        "Styling Products",
        "Hair Masks"
    ]
};

const filterBarDataBabycare = {
    brand: [
        "Johnson's Baby",
        "Aveeno Baby",
        "Burt's Bees Baby",
        "Mustela",
        "Huggies"
    ],
    filter: [
        "Hypoallergenic",
        "Fragrance-Free",
        "Gentle",
        "Moisturizing",
        "Dermatologist-Tested"
    ],
    tags: [
        "Organic",
        "Sensitive Skin",
        "Cruelty-Free",
        "Paraben-Free",
        "Clinically Proven"
    ],
    category: [
        "Diapers",
        "Baby Wipes",
        "Baby Lotion",
        "Shampoo & Body Wash",
        "Baby Powder"
    ]
};

const allShopFilter = {
    brand: [
        ...new Set([
            // Brands from Skin
            "Neutrogena",
            "Olay",
            "CeraVe",
            "La Roche-Posay",
            "Eucerin",
            // Brands from Hair
            "Pantene",
            "Garnier",
            "Tresemmé",
            "Redken",
            "Matrix",
            // Brands from Babycare
            "Johnson's Baby",
            "Aveeno Baby",
            "Burt's Bees Baby",
            "Mustela",
            "Huggies"
        ])
    ],
    filter: [
        ...new Set([
            // Filters from Skin
            "Hydrating",
            "Anti-Aging",
            "Sensitive Skin",
            "Oil-Free",
            "Non-Comedogenic",
            // Filters from Hair
            "Volume",
            "Color Protection",
            "Frizz Control",
            "Repair",
            // Filters from Babycare
            "Hypoallergenic",
            "Fragrance-Free",
            "Gentle",
            "Moisturizing",
            "Dermatologist-Tested"
        ])
    ],
    tags: [
        ...new Set([
            // Tags from Skin
            "Cruelty-Free",
            "Fragrance-Free",
            "Organic",
            "Vegan",
            "Dermatologist-Tested",
            // Tags from Hair
            "Sulfate-Free",
            "Paraben-Free",
            "For Curly Hair",
            // Tags from Babycare
            "Sensitive Skin",
            "Clinically Proven"
        ])
    ],
    category: [
        ...new Set([
            // Categories from Skin
            "Cleansers",
            "Moisturizers",
            "Serums",
            "Sunscreens",
            "Face Masks",
            // Categories from Hair
            "Shampoos",
            "Conditioners",
            "Hair Treatments",
            "Styling Products",
            "Hair Masks",
            // Categories from Babycare
            "Diapers",
            "Baby Wipes",
            "Baby Lotion",
            "Shampoo & Body Wash",
            "Baby Powder"
        ])
    ]
};



</script>

<style lang="scss" scoped>

</style>