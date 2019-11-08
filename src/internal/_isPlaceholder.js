export default function(a) {
  return !!a && typeof a === "object" && a["@@functional/placeholder"] === true;
}
