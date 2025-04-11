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
    value: Array<string>;
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
  values: Array<Link>;
}

export interface Link {
  name: string;
  url: string;
}

export interface Experiences {
  title: string;
  values: Array<Experience>;
}

export interface Experience {
  name: string;
  url: string;
  begin: number;
  end?: number;
  desc: Array<string>;
}

export interface Educations {
  title: string;
  values: Array<Education>;
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
  values: Array<Internship>;
}

export interface Internship {
  name: string;
  url: string;
  begin: number;
  desc: Array<string>;
  tech: Array<string>;
}

export interface Certifications {
  title: string;
  values: Array<Certification>;
}

export interface Certification {
  name: string;
  year: number;
}

export interface OtherHistories {
  title: string;
  values: Array<OtherHistory>;
}

export interface OtherHistory {
  name: string;
  url?: string;
  begin: number;
}
