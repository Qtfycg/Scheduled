package generator.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import generator.domain.admin;
import generator.service.adminService;
import generator.mapper.adminMapper;
import org.springframework.stereotype.Service;

/**
* @author 12643
* @description 针对表【admin】的数据库操作Service实现
* @createDate 2024-12-04 15:42:13
*/
@Service
public class adminServiceImpl extends ServiceImpl<adminMapper, admin>
    implements adminService{

}




