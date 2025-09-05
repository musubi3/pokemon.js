export default function format_name(name) {
    return name.includes(" ") ? name.replaceAll(" ", "-") : name;
}