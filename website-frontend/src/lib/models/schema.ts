import { object, type InferOutput } from 'valibot';
import { Events } from './event';
import { Global } from './global';
import { StudentCouncil } from './student_council';
import { Alumni } from './alumni';
import { Linkages } from './linkages';
import { People } from './people';
import { PeopleOverview } from './people_overview';
import { PeopleCategories } from './people_categories';
import { PeopleLaboratories } from './people_laboratories';
import { Laboratories } from './laboratories';
import { About } from './about';
import { AboutPages } from './about_pages';
import { StudentsOverview } from './students_overview';
import { StudentsPages } from './students_pages';

export const Schema = object({
	global: Global,
	events: Events,
	student_council: StudentCouncil,
	alumni: Alumni,
	linkages: Linkages,
	people: People,
	people_overview: PeopleOverview,
	people_categories: PeopleCategories,
	people_laboratories: PeopleLaboratories,
	laboratories: Laboratories,
	about: About,
	about_pages: AboutPages,
	students_overview: StudentsOverview,
	students_pages: StudentsPages
});

export type Schema = InferOutput<typeof Schema>;
