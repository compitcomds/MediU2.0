<template>
    

    <div>
        <br>
        {{ filterBarDataBabycare }} 
        <br>
        {{ filterBarDataHair }}
        <br>
        {{ filterBarDataBabycare }}
    </div>

</template>

<script setup>

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

</script>

<style lang="scss" scoped>

</style>