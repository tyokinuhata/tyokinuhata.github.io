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

export interface Link {
  name: string;
  url: string;
}

export interface Links {
  title: string;
  values: Array<Link>
}

export interface Certification {
  name: string;
  year: number;
}

export interface Certifications {
  title: string;
  values: Array<Certification>
}

interface History {
  name: string;
  url?: string;
  begin: number;
  end?: number;
}

export interface StudyHistory extends History {
  dept: string;
}

export interface StudyHistories {
  title: string;
  values: Array<StudyHistory>;
}

export type JobHistory = History

export interface JobHistories {
  title: string;
  values: Array<JobHistory>;
}

export type OtherHistory = History

export interface OtherHistories {
  title: string;
  values: Array<OtherHistory>;
}

export interface Skills {
  title: string;
  values: Array<string>;
}
