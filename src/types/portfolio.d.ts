export interface Portfolio {
  title: string;
  about: About;
  links: Links;
  experiences: Experiences;
  educations: Educations;
  internships: Internships;
  certifications: Certifications;
  other_histories: OtherHistories;
}

export interface About {
  title: string;
  name: AboutItem & {
    value: {
      rn: {
        first: string;
        last: string;
      };
      hn: string;
    };
  };
  email: AboutItem & {
    value: string;
  };
  location: AboutItem & {
    value: string;
  };
  birthday: AboutItem & {
    value: string;
  };
  like: AboutItem & {
    value: string[];
  };
  motto: AboutItem & {
    value: string;
    link: string;
  };
}

export interface AboutItem {
  key: string;
  icon: string;
}

export interface Links {
  title: string;
  values: Link[];
}

export interface Link {
  name: string;
  url: string;
}

export interface Experiences {
  title: string;
  values: Experience[];
}

export interface Experience {
  name: string;
  url: string;
  begin: number;
  end?: number;
  desc: string[];
}

export interface Educations {
  title: string;
  values: Education[];
}

export interface Education {
  name: string;
  dept: string;
  url: string;
  begin: number;
  end?: number;
}

export interface Internships {
  title: string;
  values: Internship[];
}

export interface Internship {
  name: string;
  url: string;
  begin: number;
  desc: string[];
  tech: string[];
}

export interface Certifications {
  title: string;
  values: Certification[];
}

export interface Certification {
  name: string;
  year: number;
}

export interface OtherHistories {
  title: string;
  values: OtherHistory[];
}

export interface OtherHistory {
  name: string;
  url?: string;
  begin: number;
}
