<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Раздел</th>
                  <th>Последняя тема</th>
                  <th>Автор</th>
                  <th>Дата</th>
                </tr>
              </thead>
              @foreach($result as $section)
              <tbody>
                <tr>
                  <td><a href="/sections/{{ $section['id'] }}">{{ $section['name'] }}</a></td>
                  <td>{{ $section['last_topic'] }}</td>
                  <td>{{ $section['last_topic_author'] }}</td>
                  <td>{{ $section['created_at']->toFormattedDateString() }}</td>
                </tr>
              </tbody>
              @endforeach
            </table>
          </div>