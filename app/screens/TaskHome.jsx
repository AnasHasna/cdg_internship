import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { StyledContainer } from '../components/styles';
import { getProjectInfo } from '../api/projectApi';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

const TaskHome = ({ route }) => {
  const { id } = route.params;
  const user = useSelector((state) => state.user);
  const token = user.userInfo.token;
  //logic
  const { isLoading, data } = useQuery({
    queryKey: 'getProjectInfo',
    queryFn: () => getProjectInfo(id, token),
  });
  useEffect(() => {
    if (data) {
      console.log(data.data.data.usersId);
    }
  }, [data]);

  return (
    <StyledContainer>
      <Text>{id}</Text>
    </StyledContainer>
  );
};

export default TaskHome;
