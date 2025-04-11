export interface Section<T> {
  title: string;
  values: Array<T>;
}

export interface Portfolio {
  title: string;
  about: About;
  links: Section<Link>;
  experiences: Section<Experience>;
  educations: Section<Education>;
  internships: Section<Internship>;
  certifications: Section<Certification>;
  other_histories: Section<OtherHistory>;
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

export interface Link {
  name: string;
  url: string;
}

export interface Experience {
  name: string;
  url: string;
  begin: number;
  end?: number;
  desc: Array<string>;
}

export interface Education {
  name: string;
  dept: string;
  url: string;
  begin: number;
  end?: number;
}

export interface Internship {
  name: string;
  url: string;
  begin: number;
  desc: Array<string>;
  tech: Array<string>;
}

export interface Certification {
  name: string;
  year: number;
}

export interface OtherHistory {
  name: string;
  url?: string;
  begin: number;
}
