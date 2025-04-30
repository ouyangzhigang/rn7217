import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

interface HeaderProps {
  title?: string;
}
const Header = ({title}: HeaderProps): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      {/* 左侧 Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/imgs/Search_bar_selected.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>{title ?? '京东'}</Text>
      </View>

      {/* 中间搜索框 */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="请输入商品名称"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* 右侧购物车 */}
      <View style={styles.cartContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/24'}} // 替换为购物车图标
          style={styles.cartIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 3, // Android阴影
    shadowColor: '#000', // iOS阴影
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3166ff',
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  cartContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
