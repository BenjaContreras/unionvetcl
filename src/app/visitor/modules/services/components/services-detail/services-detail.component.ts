import { Service } from '@models/service.model';

@Component({
  selector: 'services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.sass']
})
export class ServicesDetailComponent implements OnInit {

  @Input() public service: Service | null;
    this.service = null;

  ngOnInit(): void {
  }

}
