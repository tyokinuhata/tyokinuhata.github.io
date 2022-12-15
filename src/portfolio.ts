export interface About {
  title: string;
  name: {
    key: string;
    value: {
      rn: {
        first: string;
        last: string;
      };
      hn: string;
    },
    icon: string;
  },
  email: {
    key: string;
    value: string;
    icon: string;
  };
  location: {
    key: string;
    value: string;
    icon: string;
  };
  birthday: {
    key: string;
    value: string;
    icon: string;
  };
  like: {
    key: string;
    value: Array<string>;
    icon: string;
  }
  bio: {
    key: string;
    value: string;
    icon: string;
  };
}

interface Base<T> {
  title: string;
  values: Array<T>;
}

export interface Link {
  name: string;
  url: string;
}
export type Links = Base<Link>

interface History {
  name: string;
  url?: string;
  begin: number;
  end?: number;
}

export interface Experience extends History {
  desc: Array<string>;
  tech: Array<string>;
}
export type Experiences = Base<Experience>

export interface Education extends History {
  dept: string;
}
export type Educations = Base<Education>

export interface Certification {
  name: string;
  year: number;
}
export type Certifications = Base<Certification>

export type OtherHistory = History
export type OtherHistories = Base<OtherHistory>
