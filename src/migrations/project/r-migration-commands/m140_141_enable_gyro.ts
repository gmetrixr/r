import { RecordNode, r, rtp, RT } from "../../../r";
import { IOrder } from "../../IOrder";

/**
 * Assigns false value to enable_gyro where enable_gyro is undefined.
 * Because upto this point, enable_gyro had default of false which is now changed to true.
 */

 class Migration implements IOrder {
  execute(projectJson: unknown) {
    const pJson = projectJson as RecordNode<RT.project>;
    const projectF = r.project(pJson);

    if(projectF.get(rtp.project.enable_gyro) === undefined) {
      projectF.set(rtp.project.enable_gyro, false);
    }
    
    projectF.set(rtp.project.version, 141);
  }
}

const migration = new Migration();
export default migration;
