import SendBird from 'sendbird';
import Immutable from 'immutable';

const APP_ID = 'F78673F0-E612-4A51-A68A-C79061E26E4A';

export function useSendBird() {
  const sb = new SendBird({appId: APP_ID});

  const connect = (USER_ID) => {
    // OPTION: 1
    // sb.connect(USER_ID, function (user, error) {
    //   if (error) {
    //     return;
    //   }
    // });

    // OPTION: 2
    sb.setErrorFirstCallback(true);
    sb.connect(USER_ID, function (error, user) {
      if (error) {
        console.log('error', error);
        return;
      }
      if (user) {
        console.log('success');
      }
    });
  };

  const disconnect = () => {
    sb.disconnect(function () {
      // A current user is discconected from Sendbird server.
    });
  };

  const updateCurrentUserInfo = (NICKNAME, PROFILE_URL) => {
    sb.updateCurrentUserInfo(NICKNAME, PROFILE_URL, function (response, error) {
      if (error) {
        return;
      }
    });
  };

  const createChannel = () => {
    sb.OpenChannel.createChannel(function (openChannel, error) {
      if (error) {
        return;
      }
    });
  };

  const enterChannel = (CHANNEL_URL) => {
    sb.OpenChannel.getChannel(CHANNEL_URL, function (openChannel, error) {
      if (error) {
        return;
      }

      openChannel.enter(function (response, error) {
        if (error) {
          return;
        }
      });
    });
  };

  const sendUserMessage = (MESSAGE, DATA, CUSTOM_TYPE) => {
    sb.openChannel.sendUserMessage(MESSAGE, DATA, CUSTOM_TYPE, function (
      message,
      error,
    ) {
      if (error) {
        return;
      }
    });
  };

  const createChannelWithUserIds = (userIds, NAME, COVER_URL, DATA) => {
    sb.GroupChannel.createChannelWithUserIds(
      userIds,
      false,
      NAME,
      COVER_URL,
      DATA,
      function (groupChannel, error) {
        if (error) {
          return;
        }

        var immutableObject = Immutable.fromJS(groupChannel);
        console.log(immutableObject);
      },
    );
  };

  return {
    sb,
    connect,
    disconnect,
    updateCurrentUserInfo,
    createChannel,
    enterChannel,
    sendUserMessage,
    createChannelWithUserIds,
  };
}
