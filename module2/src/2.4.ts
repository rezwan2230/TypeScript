//generic with interface

type TSmartWatch = {
  brand: string;
  model: string;
  display?: string;
  heartTracking?: boolean;
  sleepTracking?: boolean;
};

type TBike = {
  brand: string;
  model: string;
  type: string;
  gearCount: number;
  isElectric: boolean;
};

interface Developer<T, K=null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    release: number;
  };
  smartWatch: T;
  bike?: K;
}

const poorDeveloper: Developer<TSmartWatch> = {
  name: "rezwan",
  computer: {
    brand: "Dell",
    model: "XPS 13",
    release: 2020,
  },
  smartWatch: {
    brand: "Apple",
    model: "Series 6",
    display: "OLED",
  },
};
console.log("🚀 ~ poorDeveloper:", poorDeveloper)


const richDeveloper: Developer<TSmartWatch, TBike> = {
  name: "zishan",
  computer: {
    brand: "Apple",
    model: "MacBook Pro",
    release: 2021,
  },
  smartWatch: {
    brand: "Samsung",
    model: "Galaxy Watch 4",
    heartTracking: true,
    sleepTracking: true,
  },
  bike: {
    brand: "Trek",
    model: "Domane SL 7",
    type: "Road",
    gearCount: 22,
    isElectric: false,
  },
};
console.log("🚀 ~ richDeveloper:", richDeveloper)
