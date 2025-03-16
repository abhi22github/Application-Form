package com.SpringReactProject.fullStack_backend.repositories;

import com.SpringReactProject.fullStack_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
