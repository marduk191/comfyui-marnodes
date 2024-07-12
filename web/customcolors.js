// Define custom colors
const customColors = {
    crimson_red: { color: "#962123", bgcolor: "#B71C1C", groupcolor: "#FF595C" },
    magenta_pink: { color: "#792243", bgcolor: "#880E4F", groupcolor: "#FF5984" },
    violet_purple: { color: "#42137E", bgcolor: "#4A148C", groupcolor: "#FF5EAF" },
    royal_purple: { color: "#291983", bgcolor: "#311B92", groupcolor: "#FF63BE" },
    deep_indigo: { color: "#132270", bgcolor: "#1A237E", groupcolor: "#FF68D3" },
    navy_blue: { color: "#063B94", bgcolor: "#0D47A1", groupcolor: "#FF6EFF" },
    sky_blue: { color: "#004B8E", bgcolor: "#01579B", groupcolor: "#FF7AFF" },
    aqua_cyan: { color: "#005658", bgcolor: "#006064", groupcolor: "#00FF9E" },
    forest_teal: { color: "#004333", bgcolor: "#004D40", groupcolor: "#00FFB9" },
    emerald_green: { color: "#145013", bgcolor: "#1B5E20", groupcolor: "#FF6F5C" },
    olive_green: { color: "#2C5F11", bgcolor: "#33691E", groupcolor: "#FF8259" },
    chartreuse_lime: { color: "#766B0A", bgcolor: "#827717", groupcolor: "#FFD14B" },
    golden_yellow: { color: "#EE740A", bgcolor: "#F57F17", groupcolor: "#FFFF4B" },
    tangerine_amber: { color: "#F96200", bgcolor: "#FF6F00", groupcolor: "#FFA334" },
    sunset_orange: { color: "#D94700", bgcolor: "#E65100", groupcolor: "#FF7234" },
    burnt_orange: { color: "#B52C00", bgcolor: "#BF360C", groupcolor: "#FF5733" },
    chocolate_brown: { color: "#371D1A", bgcolor: "#3E2723", groupcolor: "#A1807B" },
    charcoal_gray: { color: "#1A1717", bgcolor: "#212121", groupcolor: "#848282" },
    slate_blue_gray: { color: "#1F2F30", bgcolor: "#263238", groupcolor: "#6F9FA0" }
};

// Extend LGraphCanvas.node_colors with custom colors
Object.assign(LGraphCanvas.node_colors, customColors);