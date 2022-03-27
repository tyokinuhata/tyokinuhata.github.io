export interface About {
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

export type Links = Array<Link>

export interface Certification {
  name: string;
  year: number;
}

export type Certifications = Array<Certification>

interface History {
  name: string;
  url?: string;
  begin: number;
  end?: number;
}

export interface StudyHistory extends History {
  dept: string;
}

export type StudyHistories = Array<StudyHistory>

export type JobHistory = History

export type JobHistories = Array<JobHistory>

export type OtherHistory = History

export type OtherHistories = Array<OtherHistory>

export type Skills = Array<string>
