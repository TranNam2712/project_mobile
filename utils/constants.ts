// navigation
export type RootStackParamList = {
  Home: undefined;
  Devices: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
};

// fonts
export const fonts = {
  OpenSansItalic: "OpenSans-Italic",
};

// languages
interface language {
  id: number;
  title: string;
  flag: string;
  language: string;
}

export const languages: language[] = [
  { id: 1, title: "Việt Nam", flag: "vn", language: "vi" },
  { id: 2, title: "English", flag: "us", language: "en" },
];
