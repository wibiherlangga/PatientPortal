export const getColorTimeline = (type) => {
  switch (type) {
    case "Rawat Jalan": return "bg-yellow-400";
    case "Rawat Inap": return "bg-blue-400";
    case "Gawat Darurat": return "bg-pink-400";
    case "Farmasi": return "bg-orange-400";
    case "Lab": return "bg-green-400";
    case "Radiologi": return "bg-purple-400";
    default: return "bg-gray-300";
  }
};
