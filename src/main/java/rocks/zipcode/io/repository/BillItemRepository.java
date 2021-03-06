package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.BillItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BillItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BillItemRepository extends JpaRepository<BillItem, Long> {

}
