import { IScheduleRequest } from './../../interfaces/schedules/index';
import AppDataSource from "../../data-source";
import SchedulesUsersProperties from "../../entities/schedulesUsersProperties.entities";

const createSchedulesService = async (scheduleData: IScheduleRequest, userId: string) => {

	const schedulesRepository = AppDataSource.getRepository(SchedulesUsersProperties)

	const createdSchedule = await schedulesRepository.save({
		...scheduleData,
		userId: userId,
	})

	return createdSchedule
}

export default createSchedulesService
