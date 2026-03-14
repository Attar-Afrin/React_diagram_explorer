// simple mock function to return circuit components

export const fetchCircuitParts = () => {
  return [
    { id: 1, name: "Resistor" },
    { id: 2, name: "Capacitor" },
    { id: 3, name: "Diode" },
    { id: 4, name: "Transistor" }
  ];
};