import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useGetRegionsQuery } from '@/api/getAPI';
import {
  getDayName,
  getDayNumber,
  getMonthName,
  getPartOfDay,
  getYear,
} from '@/helpers/useCalendar';
import { selectedRegion, setRegion } from '@/redux/slices/regionSlice';
import { useAppDispatch } from '@/redux/store';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const activeRegion = useSelector(selectedRegion);

  const { data, error, isLoading } = useGetRegionsQuery('available/regions');

  const onChangeRegion = (region: string) => {
    dispatch(setRegion(region));
  };

  if (error) return;

  if (isLoading) return <div>Is Loading..</div>;

  return (
    <div className="flex justify-between items-center border-b pb-3">
      {/* Greetings & Date today */}
      <div>
        <h1 className="text-3xl font-bold">{getPartOfDay()}</h1>
        <span className="text-sm text-gray-500 font-light">
          {getDayName()}, {getMonthName()} {getDayNumber()}, {getYear()}
        </span>
      </div>
      {data?.regions && (
        <div className="flex flex-col items-end">
          <div className="flex">
            {Object.keys(data?.regions).length && (
              <select
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                value={Object.values(data?.regions).find(
                  region => region === activeRegion,
                )}
                onChange={e => onChangeRegion(e.target.value)}
              >
                {Object.keys(data?.regions)
                  .sort()
                  .map(region => {
                    return (
                      <option
                        key={data?.regions[region]}
                        value={data?.regions[region]}
                      >
                        {region}
                      </option>
                    );
                  })}
              </select>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
