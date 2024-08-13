
onEvent("recipes", event => {
    //Mek,IE -> Thermal Lead
    event.shapeless('thermal:lead_ingot', ['mekanism:ingot_lead'])
    event.shapeless('thermal:lead_ingot', ['immersiveengineering:ingot_lead'])

    //Thermal,IE -> Mek Lead
    event.shapeless('mekanism:ingot_lead', ['thermal:lead_ingot'])
    event.shapeless('mekanism:ingot_lead', ['immersiveengineering:ingot_lead'])

    //Mek, Thermal -> IE Lead
    event.shapeless('immersiveengineering:lead_ingot', ['mekanism:ingot_lead'])
    event.shapeless('immersiveengineering:lead_ingot', ['thermal:lead_ingot'])

    //Uranium conversions
    event.shapeless('mekanism:ingot_uranium', ['immersiveengineering:ingot_uranium'])
    event.shapeless('immersiveengineering:ingot_uranium', ['mekanism:ingot_uranium'])

    //Steel conversions
    event.shapeless('mekanism:ingot_steel', ['immersiveengineering:ingot_steel'])
    event.shapeless('immersiveengineering:ingot_steel', ['mekanism:ingot_steel'])

    //Tin conversions
    event.shapeless('mekanism:ingot_tin', ['thermal:tin_ingot'])
    event.shapeless('thermal:tin_ingot', ['mekanism:ingot_tin'])

    //Electrum
    event.shapeless('createaddition:electrum_ingot', ['immersiveengineering:ingot_electrum'])
    event.shapeless('createaddition:electrum_ingot', ['thermal:electrum_ingot'])

    event.shapeless('thermal:electrum_ingot', ['createaddition:electrum_ingot'])
    event.shapeless('thermal:electrum_ingot', ['immersiveengineering:ingot_electrum'])

    event.shapeless('immersiveengineering:ingot_electrum', ['thermal:electrum_ingot'])
    event.shapeless('immersiveengineering:ingot_electrum', ['createaddition:electrum_ingot'])

})