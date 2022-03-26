export interface About {
  name: {
    rn: {
      first: string;
      last: string;
    };
    hn: string;
  },
  email: string;
  location: string;
  birthday: string;
  like: Array<string>;
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
  begin: number;
  end?: number;
}

export interface StudyHistory extends History {
  dept: string;
}

export type StudyHistories = Array<StudyHistory>

export type JobHistory = History

export type JobHistories = Array<JobHistory>

export type Skills = Array<string>
