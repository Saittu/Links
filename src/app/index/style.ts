import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      color: colors.green[900],
      fontSize: 22,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 60,

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },
    logo: {
        height: 32,
        width: 38,
    },

    links: {
      borderTopWidth: 1,
      borderTopColor: colors.gray[600],
    },

    linksContent: {
      gap: 20,
      padding: 24,
      paddingBottom: 100,
    },

    modal: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    modalContent: {
      backgroundColor: colors.gray[900],
      borderTopColor: colors.gray[800],
      borderTopWidth: 1,
      paddingBottom: 42,
      padding: 24,
    },

    modalHeader: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
    },

    modalCategory: {
      flex: 1,
      fontSize: 16,
      fontWeight: '500',
      color: colors.gray[400],
    },

    modalLinkName: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.gray[200],
    },

    modalUrl: {
      fontSize: 14,
      color: colors.gray[400],
    },

    modalFooter: {
      flexDirection: 'row',
      marginTop: 32,
      width: '100%',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: colors.gray[600],
      paddingVertical: 18,
    },
  })

 